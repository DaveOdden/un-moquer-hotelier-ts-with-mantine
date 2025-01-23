import { Routes, Route, Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import '@mantine/core/styles.layer.css'
import 'mantine-datatable/styles.layer.css'

import { AppNav } from './components/AppNav/AppNav'
import { Dashboard } from './features/Dashboard/Dashboard'
import { Guests } from './features/Guests/Guests'
import { Bookings } from './features/Bookings/Bookings'
import { Settings } from './features/Settings/Settings'
import { Rooms } from './features/Rooms/Rooms'
import './App.css'

export const App = () => {
	return (
		<AppShell
			navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: false } }}
			padding="md"
			data-testid="app-shell">
			<AppShell.Navbar>
				<AppNav />
			</AppShell.Navbar>
			<AppShell.Main>
				<Routes>
					<Route path="/" element={<MockLayout />}>
						<Route index element={<h1>Test</h1>} />
						<Route index path="overview" element={<Dashboard />} />
						<Route path="bookings" element={<Bookings />} />
						<Route path="guests" element={<Guests />} />
						<Route path="rooms" element={<Rooms />} />
						<Route path="settings" element={<Settings />} />
						<Route path="*" element={<h1>404: Page Does Not Exist</h1>} />
					</Route>
				</Routes>
			</AppShell.Main>
		</AppShell>
	)
}

function MockLayout() {
	return <Outlet />
}
