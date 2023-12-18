import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { Loader, ScrollArea, Card, Text, Stack } from '@mantine/core'
import { useAllFeatures } from 'src/hooks/useAllQuery'
import { asDashboardCard } from '../asDashboardCard'
import classes from './Occupants.module.css'

export const OccupantsContent = () => {
	const [guests, bookings, rooms] = useAllFeatures()
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookings, rooms)
	const checkedInBookings = aggregatedData.filter((obj: any) => obj.checkedIn === true)

	if (bookings.isLoading) return <Loader />
	if (bookings.isError) return <>Error</>

	return (
		<ScrollArea h="100%" className={classes.scrollArea}>
			{checkedInBookings.map((booking) => (
				<Card
					py="md"
					px="lg"
					w="100%"
					shadow="none"
					radius={0}
					key={booking.guest._id}
					style={{ flexShrink: 0, borderBottom: `1px solid var(--mantine-color-gray-3)` }}>
					<Stack justify="flex-start" gap={0} align="flex-start">
						<Text fw={500} c="dark.4" lineClamp={1}>
							{booking.guest.fullName}
						</Text>
						<Text fw={500} c="dimmed" size="sm" lineClamp={1}>
							Room #{booking.room.roomNum}
						</Text>
					</Stack>
				</Card>
			))}
		</ScrollArea>
	)
}

export const Occupants = asDashboardCard(OccupantsContent)
