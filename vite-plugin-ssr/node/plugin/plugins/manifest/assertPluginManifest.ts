export { assertPluginManifest }
export type { PluginManifest }

import { assertRuntimeManifest } from '../../../runtime/globalContext'
import {
  assert,
  assertUsage,
  isPlainObject,
  projectInfo,
  checkType,
  hasProp,
  isStringRecord,
  objectAssign
} from '../../utils'

type PluginManifest = {
  version: string
  baseServer: string
  baseAssets: string | null
  usesClientRouter: boolean
  includeAssetsImportedByServer: boolean
  manifestKeyMap: Record<string, string>
}
function assertPluginManifest(pluginManifest: unknown): asserts pluginManifest is PluginManifest {
  assert(isPlainObject(pluginManifest))
  assertUsage(
    pluginManifest.version === projectInfo.projectVersion,
    `You need to re-build your app (\`$ vite build\`). (Because you are using \`vite-plugin-ssr@${projectInfo.projectVersion}\` while your build has been generated with a different version \`vite-plugin-ssr@${pluginManifest.version}\`.)`
  )
  assertRuntimeManifest(pluginManifest)
  assert(hasProp(pluginManifest, 'usesClientRouter', 'boolean'))
  assert(hasProp(pluginManifest, 'version', 'string'))
  assert(hasProp(pluginManifest, 'manifestKeyMap', 'object'))
  const { manifestKeyMap } = pluginManifest
  assert(isStringRecord(manifestKeyMap))
  // Avoid:
  // ```
  // Uncaught (in promise) TypeError: Cannot set property manifestKeyMap of #<Object> which has only a getter
  // ```
  // See https://github.com/brillout/vite-plugin-ssr/issues/596
  const pluginManifestClone = { ...pluginManifest }
  objectAssign(pluginManifestClone, { manifestKeyMap })
  checkType<PluginManifest>(pluginManifestClone)
}
