/// <reference types="vitest" />
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {visualizer} from 'rollup-plugin-visualizer'

const port = process.env.PORT || 5000

export default defineConfig(({mode}) => ({
  plugins: [
    svelte({hot: !process.env.VITEST}),
    visualizer(),
  ],
  base: mode === 'development' ? `http://localhost:${port}/` : '/orchy-svelte-template/',
  server: {port, cors: true},
  test: {
    environment: 'jsdom',
    mockReset: true
  }
}))
