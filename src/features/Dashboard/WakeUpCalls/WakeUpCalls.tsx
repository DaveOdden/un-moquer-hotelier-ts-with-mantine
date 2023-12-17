import { Card, Title } from '@mantine/core'
import classes from './WakeUpCalls.module.css'

export const WakeUpCalls = () => {
	return (
		<Card
			shadow="sm"
			padding={0}
			radius="md"
			withBorder
			w="100%"
			h="100%"
			className={classes.fullHeight}>
			<Title order={3} p="sm" className={classes.cardTitle}>
				Wake-up Calls
			</Title>
		</Card>
	)
}
