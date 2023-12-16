import { useState } from 'react'
import { DataTable, type DataTableSortStatus } from 'mantine-datatable'
import { Card, Button, Badge, Modal, Text } from '@mantine/core'
import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import sortBy from 'lodash/sortBy'
import dayjs from 'dayjs'

import { useGuests } from 'src/hooks/useGuestsQuery'
import { useRooms } from 'src/hooks/useRoomsQuery'
import { useTodaysBookings } from 'src/hooks/useBookingsQuery'
import { Checkin } from './CheckinModal'
import classes from './TodaysCheckins.module.css'

export const TodaysCheckins: React.FC<{}> = () => {
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

	const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
		columnAccessor: 'checkinDate',
		direction: 'asc',
	})

	const sortedData = sortBy(aggregatedData, sortStatus.columnAccessor)
	const records = sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData

	const initializeModal = (record: any) => {
		setCheckinRecord(record)
		openModal()
	}
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)

	return (
		<Card withBorder radius="xl" className={classes.fullHeight}>
			<h2 style={{ fontSize: '1rem' }}>Today's Checkins</h2>
			<DataTable
				height="100%"
				verticalSpacing="sm"
				highlightOnHover
				records={records}
				sortStatus={sortStatus}
				onSortStatusChange={setSortStatus}
				columns={[
					{
						accessor: 'status',
						title: 'Status',
						render: ({ checkinDate }: { checkinDate: string }) => {
							let render = {
								message: '',
								color: '',
							}
							if (dayjs(checkinDate).isBefore(dayjs(), 'second')) {
								return (
									<Badge color="red.5" radius="sm">
										Late
									</Badge>
								)
							}

							if (
								dayjs(checkinDate).isAfter(
									dayjs().set('hour', 1).set('minute', 0).set('second', 0),
									'hour'
								)
							) {
								render.message = 'Morning'
								render.color = 'yellow'
							}

							if (
								dayjs(checkinDate).isAfter(
									dayjs().set('hour', 11).set('minute', 59).set('second', 59),
									'hour'
								)
							) {
								render.message = 'Afternoon'
								render.color = 'cyan.5'
							}

							if (
								dayjs(checkinDate).isAfter(
									dayjs().set('hour', 17).set('minute', 0).set('second', 0),
									'hour'
								)
							) {
								render.message = 'Night'
								render.color = 'gray.6'
							}

							return (
								<Badge color={render.color} radius="sm">
									{render.message}
								</Badge>
							)
						},
					},
					{
						accessor: 'guest.fullName',
						title: 'Full Name',
					},
					{
						accessor: 'checkinDate',
						title: 'Checkin Time',
						render: ({ checkinDate }: { checkinDate: string }) =>
							dayjs(checkinDate).format('h:mm a'),
					},
					{
						accessor: 'room.roomNum',
						title: 'Room #',
					},
					{
						accessor: 'action',
						title: 'Action',
						render: (record) => <Button onClick={() => initializeModal(record)}>Checkin</Button>,
						cellsStyle: () => ({ paddingLeft: 0, paddingRight: 0 }),
						width: 108,
					},
				]}
				idAccessor="_id"
				{...{ stickyHeader: true }}
			/>
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
