import { useState } from 'react'
import {
	IconHome2,
	IconSettings,
	IconBook2,
	IconUsers,
	IconBuildingArch,
} from '@tabler/icons-react'
import { useNavigate, useLocation } from 'react-router-dom'

import { AppLink } from './AppLink'

const linkConfig = [
	{ icon: IconHome2, label: 'Home', key: 'overview', to: 'overview' },
	{ icon: IconBook2, label: 'Bookings', key: 'bookings', to: 'bookings' },
	{ icon: IconUsers, label: 'Guests', key: 'guests', to: 'guests' },
	{ icon: IconBuildingArch, label: 'Rooms', key: 'rooms', to: 'rooms' },
	{ icon: IconSettings, label: 'Settings', key: 'settings', to: 'settings' },
]

export const RouterLinks = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [active, setActive] = useState(location.pathname.slice(1, location.pathname.length))

	const navigateToRoute = (key: string) => {
		setActive(key)
		navigate(`/${key}`)
	}

	return linkConfig.map((link) => (
		<AppLink {...link} onClick={() => navigateToRoute(link.key)} active={link.key === active} />
	))
}
