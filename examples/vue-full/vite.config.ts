import vue from '@vitejs/plugin-vue'
import md from 'vite-plugin-md'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

const config: UserConfig = {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(), // https://github.com/justwiner/vue3-tsx/blob/master/vite.config.ts
    md(),
    ssr({ prerender: true })
  ],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  optimizeDeps: { include: ['cross-fetch'] }
}

export default config
