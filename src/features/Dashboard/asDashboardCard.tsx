import { Card, Title } from '@mantine/core'
import classes from './Dashboard.module.css'

export function asDashboardCard<T>(Component: React.FC<T & IDashboardHOCProps>) {
	return (props: T & IDashboardHOCProps) => (
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

interface IDashboardHOCProps {
	title: string
}
