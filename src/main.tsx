import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider, createTheme } from '@mantine/core'
import App from './App.tsx'
import '@mantine/core/styles.css'
import './index.css'

const theme = createTheme({
	/** Your theme override here */
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<MantineProvider theme={theme}>
					<App />
				</MantineProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
)
