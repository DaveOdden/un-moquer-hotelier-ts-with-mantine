import { NavLink, Tooltip, rem } from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'
import classes from './AppNav.module.css'

export const AppLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
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

interface NavbarLinkProps {
	icon: typeof IconHome2
	key?: string
	label: string
	active?: boolean
	onClick?(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void
}
