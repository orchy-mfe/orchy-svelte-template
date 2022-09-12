import {describe, it, expect} from 'vitest'
import {render, screen, fireEvent} from '@testing-library/svelte'

import App from './App.svelte'

describe('App', () => {
    it('renders correctly', () => {
        render(App)
        expect(screen.getByText('Click on the Vite and Svelte logos to learn more')).toBeDefined()
    })

    it('count increments correctly', async () => {
        render(App)

        const initialCountButton = screen.getAllByRole('button').at(0)
        expect(initialCountButton).toBeDefined()
        expect(initialCountButton.innerHTML).toEqual('count is 0')

        await fireEvent.click(initialCountButton)

        expect(initialCountButton.innerHTML).toEqual('count is 1')
    })
})

