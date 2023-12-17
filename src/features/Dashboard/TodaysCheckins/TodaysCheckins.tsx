import { useState } from 'react'
import { ScrollArea, Modal, Text, Card, Title } from '@mantine/core'
import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import dayjs from 'dayjs'

import { useGuests } from 'src/hooks/useGuestsQuery'
import { useRooms } from 'src/hooks/useRoomsQuery'
import { useTodaysBookings } from 'src/hooks/useBookingsQuery'
import { VerticalCheckinCards } from './CheckinCards'
import { Checkin } from './CheckinModal'
import classes from './TodaysCheckins.module.css'

export const TodaysCheckins: React.FC<{ title: string; checkedIn: boolean }> = ({
	title,
	checkedIn,
}) => {
	const startOfToday = dayjs().startOf('day').format()
	const endOfToday = dayjs().endOf('day').format()
	const guests = useGuests()
	const rooms = useRooms()
	const todaysBookings = useTodaysBookings({
		startOfDay: startOfToday,
		endOfDay: endOfToday,
	})
	const aggregatedData = getAdditionalDataForEachBooking(guests, todaysBookings, rooms)
	const [modalOpened, setModalOpened] = useState(false)
	const [checkinRecord, setCheckinRecord] = useState(null)
	const filtered = aggregatedData.filter((obj: any) => obj.checkedIn === checkedIn)

	const initializeModal = (record: any) => {
		setCheckinRecord(record)
		openModal()
	}
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)

	return (
		<Card shadow="sm" padding={0} radius="md" withBorder w="100%" h="100%">
			<Title order={3} p="sm" className={classes.cardTitle}>
				{title}
			</Title>
			<ScrollArea h="100%" className={classes.scrollArea}>
				{filtered.map((checkinRecord) => (
					<VerticalCheckinCards
						key={checkinRecord._id}
						checkinRecord={checkinRecord}
						initializeModal={initializeModal}
					/>
				))}
			</ScrollArea>
			<Modal.Root
				size={500}
				opened={modalOpened}
				onClose={closeModal}
				transitionProps={{ transition: 'pop-top-right' }}>
				<Modal.Overlay />
				<Modal.Content>
					<Modal.Header>
						<Modal.Title>
							<Text size="xs" c="dimmed" pl="md" mt="-xs">
								{dayjs().format('h:mm A')}
							</Text>
						</Modal.Title>
						<Modal.CloseButton />
					</Modal.Header>
					<Modal.Body>
						<Checkin record={checkinRecord} closeModal={closeModal} />
					</Modal.Body>
				</Modal.Content>
			</Modal.Root>
		</Card>
	)
}
