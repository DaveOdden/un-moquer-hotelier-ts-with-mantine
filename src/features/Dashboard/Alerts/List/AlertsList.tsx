import { ScrollArea } from '@mantine/core'
import { IAlert } from 'src/utils/types'
import { AlertsListCard } from './AlertsListCard'
import classes from '../Alerts.module.css'

export const AlertsList: React.FC<{
	listData: IAlert[]
}> = ({ listData }) => {
	return (
		listData.length > 0 && (
			<ScrollArea h="100%" className={classes.scrollArea}>
				{listData.map((alert) => (
					<AlertsListCard key={alert._id} alert={alert} />
				))}
			</ScrollArea>
		)
	)
}
