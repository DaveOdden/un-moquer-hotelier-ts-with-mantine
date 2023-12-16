import { Card } from '@mantine/core'
import classes from './Alerts.module.css'

export const Alerts: React.FC<{}> = () => {
	return (
		<Card withBorder radius="xl" className={classes.fullHeight}>
			<h2 style={{ fontSize: '1rem' }}>Alerts</h2>
		</Card>
	)
}
