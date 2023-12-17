import { Card, Title } from '@mantine/core'
import classes from './Occupants.module.css'

export const Occupants = () => {
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
				Occupants
			</Title>
		</Card>
	)
}