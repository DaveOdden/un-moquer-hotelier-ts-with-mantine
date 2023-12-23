import { ScrollArea } from '@mantine/core'
import { NoShowCard } from '../NoShowCard'
import { IAggregatedBooking } from 'src/utils/types'
import classes from '../NoShows.module.css'

export const NoShowList: React.FC<{
	listData: IAggregatedBooking[]
	showCheckInModal(record: IAggregatedBooking): void
}> = ({ listData, showCheckInModal }) => {
	return (
		listData.length > 0 && (
			<ScrollArea h="100%" className={classes.scrollArea}>
				{listData.map((booking) => (
					<NoShowCard booking={booking} showCheckInModal={showCheckInModal} />
				))}
			</ScrollArea>
		)
	)
}
