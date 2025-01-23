import { Flex, Card } from '@mantine/core'

import classes from './Settings.module.css'

export const Settings = () => {
	return (
		<>
			<Flex mb="md" mih={36} justify="space-between" align="center" direction="row">
				<h1 className={classes.h1}>Settings</h1>
				<Flex mih={36} gap="lg" justify="flex-end" align="center" direction="row"></Flex>
			</Flex>
			<Card shadow="sm" padding="md" radius="md" withBorder w="100%" h="100%">
				Tersert
			</Card>
		</>
	)
}
