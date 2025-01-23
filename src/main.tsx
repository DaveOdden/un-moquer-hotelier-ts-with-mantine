import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider, Loader } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { App } from './App.tsx'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './index.css'
import { RingLoader } from 'src/components/RingLoadingState/CustomLoader'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<MantineProvider
					theme={{
						components: {
							Loader: Loader.extend({
								defaultProps: {
									loaders: { ...Loader.defaultLoaders, ring: RingLoader },
									type: 'ring',
								},
							}),
						},
					}}>
					<Notifications />
					<App />
				</MantineProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
)
