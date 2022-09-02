import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/svelte'

import App from './App.svelte'

describe('App', () => {
    it('renders correctly', () => {
        render(App)
        expect(screen.getByText('Click on the Vite and Svelte logos to learn more')).toBeDefined()
    })
})

