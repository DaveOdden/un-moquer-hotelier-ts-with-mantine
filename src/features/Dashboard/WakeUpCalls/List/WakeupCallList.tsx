import { ScrollArea } from '@mantine/core'
import { CallCard } from './CallCard'
import { IAggregatedBooking } from 'src/utils/types'
import classes from '../WakeUpCalls.module.css'

export const WakeupCallList: React.FC<{
	listData: IAggregatedBooking[]
	showCheckInModal(record: IAggregatedBooking): void
}> = ({ listData, showCheckInModal }) => {
	return (
		listData.length > 0 && (
			<ScrollArea h="100%" className={classes.scrollArea}>
				{listData.map((booking) => (
					<CallCard key={booking._id} booking={booking} />
				))}
			</ScrollArea>
		)
	)
}
