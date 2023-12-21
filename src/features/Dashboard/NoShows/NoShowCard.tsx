import { Card, Text, Stack } from '@mantine/core'
import { IAggregatedBooking } from 'src/utils/types'

export const NoShowCard: React.FC<{ booking: IAggregatedBooking }> = ({ booking }) => {
	return (
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
	)
}
