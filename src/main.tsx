import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider, createTheme } from '@mantine/core'
import App from './App.tsx'
import '@mantine/core/styles.css'
import './index.css'

const theme = createTheme({
	/** Your theme override here */
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineProvider theme={theme}>
				<App />
			</MantineProvider>
		</BrowserRouter>
	</React.StrictMode>
)
