import { useState } from 'react'
import { NavLink, Center, Tooltip, Stack, rem } from '@mantine/core'
import {
	IconHome2,
	IconSettings,
	IconLogout,
	IconSwitchHorizontal,
	IconBook2,
	IconUsers,
	IconBed,
} from '@tabler/icons-react'
import { MantineLogo } from '@mantinex/mantine-logo'
import { useNavigate, useLocation } from 'react-router-dom'
import classes from './AppNav.module.css'

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
	return (
		<Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
			<NavLink
				onClick={onClick}
				className={classes.link}
				data-active={active || undefined}
				leftSection={<Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />}
			/>
		</Tooltip>
	)
}

const navData = [
	{ icon: IconHome2, label: 'Home', key: 'overview', to: 'overview' },
	{ icon: IconBook2, label: 'Bookings', key: 'bookings', to: 'bookings' },
	{ icon: IconUsers, label: 'Guests', key: 'guests', to: 'guests' },
	{ icon: IconBed, label: 'Rooms', key: 'rooms', to: 'rooms' },
	{ icon: IconSettings, label: 'Settings', key: 'settings', to: 'settings' },
]

interface NavbarLinkProps {
	icon: typeof IconHome2
	label: string
	active?: boolean
	onClick?(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void
}

export const AppNav = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [active, setActive] = useState(location.pathname.slice(1, location.pathname.length))

	const navigateToRoute = (key: string) => {
		setActive(key)
		navigate(`/${key}`)
	}

	const links = navData.map((link) => (
		<NavbarLink
			{...link}
			key={link.key}
			active={link.key === active}
			onClick={() => navigateToRoute(link.key)}
		/>
	))

	return (
		<nav className={classes.navbar}>
			<Center>
				<MantineLogo type="mark" size={30} />
			</Center>

			<div className={classes.navbarMain}>
				<Stack justify="center" gap={0}>
					{links}
				</Stack>
			</div>

			<Stack justify="center" gap={0}>
				<NavbarLink icon={IconSwitchHorizontal} label="Change account" />
				<NavbarLink icon={IconLogout} label="Logout" />
			</Stack>
		</nav>
	)
}
