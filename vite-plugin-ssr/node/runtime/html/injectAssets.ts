export { injectHtmlTagsToString }
export { injectHtmlTagsToStream }
export type { PageContextInjectAssets }
export type { PageContextPromise }

import { assert, isCallable, isPromise } from '../../utils'
import type { PageAsset } from '../renderPage/getPageAssets'
import { assertPageContextProvidedByUser } from '../../../shared/assertPageContextProvidedByUser'
import { injectHtmlTags, createHtmlHeadIfMissing } from './injectAssets/injectHtmlTags'
import type { HtmlPart } from './renderHtml'
import { getHtmlTags, type PreloadFilter, type HtmlTag } from './injectAssets/getHtmlTags'
import type { InjectToStream } from './stream/react-streaming'

type PageContextInjectAssets = {
  urlPathname: string
  __getPageAssets: () => Promise<PageAsset[]>
  _pageId: string
  _passToClient: string[]
  _isHtmlOnly: boolean
  _pageContextPromise: PageContextPromise
  _renderHook: { hookFilePath: string; hookName: 'render' }
  _baseServer: string
  is404: null | boolean
}

async function injectHtmlTagsToString(
  htmlParts: HtmlPart[],
  pageContext: PageContextInjectAssets & { _isStream: false },
  injectFilter: PreloadFilter
): Promise<string> {
  const htmlTags = await getHtmlTags(pageContext, null, injectFilter)
  const pageAssets = await pageContext.__getPageAssets()
  let htmlString = htmlPartsToString(htmlParts, pageAssets)
  htmlString = injectToHtmlBegin(htmlString, htmlTags, null)
  htmlString = injectToHtmlEnd(htmlString, htmlTags)
  return htmlString
}

function injectHtmlTagsToStream(
  pageContext: PageContextInjectAssets & { _isStream: true },
  injectToStream: null | InjectToStream,
  injectFilter: PreloadFilter
) {
  let htmlTags: HtmlTag[] | undefined

  return {
    injectAtStreamBegin,
    injectAtStreamEnd
  }

  async function injectAtStreamBegin(htmlPartsBegin: HtmlPart[]): Promise<string> {
    htmlTags = await getHtmlTags(pageContext, injectToStream, injectFilter)

    const pageAssets = await pageContext.__getPageAssets()
    let htmlBegin = htmlPartsToString(htmlPartsBegin, pageAssets)

    htmlBegin = injectToHtmlBegin(htmlBegin, htmlTags, injectToStream)
    return htmlBegin
  }

  async function injectAtStreamEnd(htmlPartsEnd: HtmlPart[]): Promise<string> {
    assert(htmlTags)
    await resolvePageContextPromise(pageContext)
    const pageAssets = await pageContext.__getPageAssets()
    let htmlEnd = htmlPartsToString(htmlPartsEnd, pageAssets)
    htmlEnd = injectToHtmlEnd(htmlEnd, htmlTags)
    return htmlEnd
  }
}

function injectToHtmlBegin(htmlBegin: string, htmlTags: HtmlTag[], injectToStream: null | InjectToStream): string {
  const htmlTagsAtBegin = htmlTags.filter((snippet) => snippet.position !== 'HTML_END')

  // Ensure existence of `<head>`
  htmlBegin = createHtmlHeadIfMissing(htmlBegin)

  htmlBegin = injectHtmlTags(htmlBegin, htmlTagsAtBegin, injectToStream)

  return htmlBegin
}

function injectToHtmlEnd(htmlEnd: string, htmlTags: HtmlTag[]): string {
  const htmlTagsAtEnd = htmlTags.filter((snippet) => snippet.position === 'HTML_END')
  htmlEnd = injectHtmlTags(htmlEnd, htmlTagsAtEnd, null)
  return htmlEnd
}

// https://vite-plugin-ssr.com/stream#initial-data-after-stream-end
type PageContextPromise = null | Promise<unknown> | (() => void | Promise<unknown>)
async function resolvePageContextPromise(pageContext: {
  _pageContextPromise: PageContextPromise
  _renderHook: { hookFilePath: string; hookName: 'render' }
}) {
  const pageContextPromise = pageContext._pageContextPromise
  if (!pageContextPromise) {
    return
  }
  let pageContextProvidedByUser: unknown
  if (isCallable(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise()
  } else if (isPromise(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise
  } else {
    assert(false)
  }
  assertPageContextProvidedByUser(pageContextProvidedByUser, {
    hook: pageContext._renderHook
  })
  Object.assign(pageContext, pageContextProvidedByUser)
}

function htmlPartsToString(htmlParts: HtmlPart[], pageAssets: PageAsset[]): string {
  let htmlString = ''
  htmlParts.forEach((p) => {
    htmlString += typeof p === 'string' ? p : p(pageAssets)
  })
  return htmlString
}
