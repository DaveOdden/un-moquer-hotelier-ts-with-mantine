import { ScrollArea } from '@mantine/core'
import { CheckinsListItems } from './CheckinsListItems'
import classes from '../TodaysCheckins.module.css'

export const CheckinsList: React.FC<{
	listData: any[]
	showCheckInModal(record: any): void
}> = ({ listData, showCheckInModal }) => {
	return (
		listData.length > 0 && (
			<ScrollArea h="100%" className={classes.scrollArea}>
				{listData.map((checkinRecord) => (
					<CheckinsListItems
						key={checkinRecord._id}
						checkinRecord={checkinRecord}
						initializeModal={showCheckInModal}
					/>
				))}
			</ScrollArea>
		)
	)
}
