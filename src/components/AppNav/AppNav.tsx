import { Center, Stack } from '@mantine/core'
import { IconLogout, IconSwitchHorizontal } from '@tabler/icons-react'
import { MantineLogo } from '@mantinex/mantine-logo'

import { RouterLinks } from './RouterLinks'
import { AppLink } from './AppLink'
import classes from './AppNav.module.css'

export const AppNav = () => {
	return (
		<nav className={classes.navbar}>
			<Center mt="5">
				<MantineLogo type="mark" size={30} />
			</Center>

			<div className={classes.navbarMain}>
				<Stack justify="center" gap={0}>
					<RouterLinks />
				</Stack>
			</div>

			<Stack justify="center" gap={0}>
				<AppLink icon={IconSwitchHorizontal} label="Change account" />
				<AppLink icon={IconLogout} label="Logout" />
			</Stack>
		</nav>
	)
}
