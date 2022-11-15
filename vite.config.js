/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {visualizer} from 'rollup-plugin-visualizer'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const port = process.env.PORT || 5000

export default defineConfig(({mode}) => ({
  plugins: [
    svelte({hot: !process.env.VITEST}),
    visualizer(),
    cssInjectedByJsPlugin()
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-svelte-template/',
  server: {port, cors: true},
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  test: {
    environment: 'jsdom',
    mockReset: true
  }
}))
