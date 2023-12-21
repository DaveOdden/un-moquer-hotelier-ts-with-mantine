import { Loader, ScrollArea } from '@mantine/core'

import { useAllFeatures } from 'src/hooks/useAllQuery'
import { asDashboardCard } from '../asDashboardCard'
import { guestIsLate } from 'src/utils/formatting'
import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { IAggregatedBooking } from 'src/utils/types'
import { NoShowCard } from './NoShowCard'
import classes from './NoShows.module.css'

const NoShowsContent: React.FC<{ title: string }> = () => {
	const [guests, bookings, rooms] = useAllFeatures()
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookings, rooms)
	const noShowBookings = aggregatedData.filter(
		(singleBooking: IAggregatedBooking) =>
			singleBooking.checkedIn === false && guestIsLate(singleBooking.checkinDate)
	)

	if (guests.isLoading || rooms.isLoading || bookings.isLoading) return <Loader />
	if (guests.isError || rooms.isError || bookings.isError) return <>Error</>

	return (
		<ScrollArea h="100%" className={classes.scrollArea}>
			{noShowBookings.map((booking) => (
				<NoShowCard booking={booking} />
			))}
		</ScrollArea>
	)
}
export const NoShows = asDashboardCard(NoShowsContent)
