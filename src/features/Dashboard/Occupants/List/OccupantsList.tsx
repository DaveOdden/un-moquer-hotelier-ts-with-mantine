// import { NoShowCard } from './NoShowCard'
import { IAggregatedBooking } from 'src/utils/types'
import { ScrollArea, Card, Text, Stack } from '@mantine/core'
import classes from '../Occupants.module.css'

export const OccupantsList: React.FC<{
	listData: IAggregatedBooking[]
	showCheckInModal(record: IAggregatedBooking): void
}> = ({ listData }) => {
	return (
		listData.length > 0 && (
			<ScrollArea h="100%" className={classes.scrollArea}>
				{listData.map((booking) => (
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
	)
}
