import { Card, Title } from '@mantine/core'
import classes from './Dashboard.module.css'

export const asDashboardCard = (Component: any) => {
	return (props: any) => {
		console.log(props)
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
					{props.title}
				</Title>
				<Component {...props} />
			</Card>
		)
	}
}
