import { Card } from '@mantine/core'
import classes from './Tasks.module.css'

export const Tasks: React.FC<{}> = () => {
	return (
		<Card withBorder radius="xl" className={classes.fullHeight}>
			<h2 style={{ fontSize: '1rem' }}>Tasks</h2>
		</Card>
	)
}
