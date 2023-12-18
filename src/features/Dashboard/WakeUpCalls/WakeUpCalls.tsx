import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { Loader, ScrollArea } from '@mantine/core'
import { useAllFeatures } from 'src/hooks/useAllQuery'
import { asDashboardCard } from '../asDashboardCard'
import { CallCard } from './CallCard'
import classes from './WakeUpCalls.module.css'

const WakeUpCallsContent: React.FC<{ title: string }> = () => {
	const [guests, bookings, rooms] = useAllFeatures()
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookings, rooms)
	const nonCheckedInBookings = aggregatedData.filter((obj: any) => obj.checkedIn === true)

	if (guests.isLoading || rooms.isLoading || bookings.isLoading) return <Loader />
	if (guests.isLoading || rooms.isLoading || bookings.isLoading) return <>Error</>

	return (
		<ScrollArea h="100%" className={classes.scrollArea}>
			{nonCheckedInBookings.map((booking) => (
				<CallCard key={booking._id} booking={booking} />
			))}
		</ScrollArea>
	)
}
export const WakeUpCalls = asDashboardCard(WakeUpCallsContent)
