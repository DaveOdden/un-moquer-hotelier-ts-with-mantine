import { useState } from 'react'
import { Loader } from '@mantine/core'

import { useAllFeatures } from 'src/hooks/useAllQuery'
import { asDashboardCard } from '../asDashboardCard'
import { guestIsLate } from 'src/utils/formatting'
import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { IAggregatedBooking } from 'src/utils/types'
import { NoShowListEmpty } from './Empty/NoShowListEmpty'
import { NoShowList } from './List/NoShowList'
import { NoShowModal } from './Modal/NoShowModal'

const NoShowsContent: React.FC<{ title: string }> = () => {
	const [guests, bookings, rooms] = useAllFeatures()
	const [modalOpened, setModalOpened] = useState<boolean>(false)
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookings, rooms)
	const [checkinRecord, setCheckinRecord] = useState<IAggregatedBooking | null>(null)
	const noShowBookings = aggregatedData.filter(
		(singleBooking: IAggregatedBooking) =>
			singleBooking.checkedIn === false && guestIsLate(singleBooking.checkinDate)
	)
	const initializeModal = (record: any) => {
		setCheckinRecord(record)
		openModal()
	}
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)

	if (guests.isLoading || rooms.isLoading || bookings.isLoading) return <Loader />
	if (guests.isError || rooms.isError || bookings.isError) return <>Error</>

	return (
		<>
			<NoShowListEmpty isShown={noShowBookings.length === 0} />
			<NoShowList listData={noShowBookings} showCheckInModal={initializeModal} />
			<NoShowModal isOpen={modalOpened} closeModal={closeModal} data={checkinRecord} />
		</>
	)
}
export const NoShows = asDashboardCard(NoShowsContent)
