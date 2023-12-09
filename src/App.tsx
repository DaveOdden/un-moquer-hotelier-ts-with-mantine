import { Routes, Route, Outlet } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { AppShell } from '@mantine/core'

import { AppNav } from './components/AppNav'
import { Guests } from './features/Guests/Guests'
import '@mantine/core/styles.layer.css'
import 'mantine-datatable/styles.layer.css'
import './App.css'

const App = () => {
	const [opened, { toggle }] = useDisclosure()

	return (
		<AppShell navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: !opened } }} padding="md">
			<AppShell.Navbar>
				<AppNav />
			</AppShell.Navbar>
			<AppShell.Main>
				<Routes>
					<Route path="/" element={<MockLayout />}>
						<Route index element={<h1>Test</h1>} />
						<Route path="overview" element={<h1>Overview</h1>} />
						<Route path="bookings" element={<h1>Bookings</h1>} />
						<Route path="guests" element={<Guests />} />
						<Route path="rooms" element={<h1>Rooms</h1>} />
						<Route path="settings" element={<h1>Settings</h1>} />
						<Route path="*" element={<h1>None</h1>} />
					</Route>
				</Routes>
			</AppShell.Main>
		</AppShell>
	)
}

function MockLayout() {
	return <Outlet />
}

export default App
