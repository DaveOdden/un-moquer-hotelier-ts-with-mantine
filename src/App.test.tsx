import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
})

test('Renders app', async () => {
	render(
		<BrowserRouter>
			<MantineProvider>
				<App />
			</MantineProvider>
		</BrowserRouter>
	)
	expect(screen.getByTestId('app-shell')).toBeInTheDocument()
})
