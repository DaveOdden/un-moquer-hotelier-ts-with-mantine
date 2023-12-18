import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { Text, Box, Stack } from '@mantine/core'
import { useAllFeatures } from 'src/hooks/useAllQuery'
import { asDashboardCard } from '../asDashboardCard'

export const OccupantsContent = () => {
	const [guests, bookigns, rooms] = useAllFeatures()
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookigns, rooms)
	const checkedInBookings = aggregatedData.filter((obj: any) => obj.checkedIn === true)

	return (
		<Box px="md">
			{checkedInBookings.map((booking) => {
				return (
					<Stack key={booking.guest._id} justify="flex-start" gap={0} align="flex-start">
						<Text fw={500} c="dimmed" size="sm">
							{booking.guest.fullName}
						</Text>
					</Stack>
				)
			})}
		</Box>
	)
}

export const Occupants = asDashboardCard(OccupantsContent)
