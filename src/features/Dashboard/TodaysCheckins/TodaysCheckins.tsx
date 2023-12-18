import { useState } from 'react'
import dayjs from 'dayjs'

import { useGuests } from 'src/hooks/useGuestsQuery'
import { useRooms } from 'src/hooks/useRoomsQuery'
import { useTodaysBookings } from 'src/hooks/useBookingsQuery'
import { asDashboardCard } from '../asDashboardCard'
import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { CheckinsListEmpty } from './Empty/CheckinsListEmpty'
import { CheckinsList } from './List/CheckinsListContainer'
import { CheckinModal } from './Modal/CheckinModal'

export const TodaysCheckinsContent: React.FC<{ title: string; checkedIn: boolean }> = ({
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
	const filteredCheckinData = aggregatedData.filter((obj: any) => obj.checkedIn === checkedIn)

	const initializeModal = (record: any) => {
		setCheckinRecord(record)
		openModal()
	}
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)

	return (
		<>
			<CheckinsListEmpty isShown={filteredCheckinData.length === 0} checkedIn={checkedIn} />
			<CheckinsList listData={filteredCheckinData} showCheckInModal={initializeModal} />
			<CheckinModal isOpen={modalOpened} closeModal={closeModal} data={checkinRecord} />
		</>
	)
}

export const TodaysCheckins = asDashboardCard(TodaysCheckinsContent)
