import { useState } from 'react'
import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { Loader } from '@mantine/core'

import { useAllFeatures } from 'src/hooks/useAllQuery'
import { asDashboardCard } from '../asDashboardCard'
import { IAggregatedBooking } from 'src/utils/types'
import { OccupantsListEmpty } from './Empty/OccupantsListEmpty'
import { OccupantsList } from './List/OccupantsList'
import { OccupantModal } from './Modal/OccupantModal'

export const OccupantsContent: React.FC<{}> = () => {
	const [modalOpened, setModalOpened] = useState<boolean>(false)
	const [guests, bookings, rooms] = useAllFeatures()
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookings, rooms)
	const checkedInBookings = aggregatedData.filter(
		(obj: IAggregatedBooking) => obj.checkedIn === true
	)

	const initializeModal = () => {
		openModal()
	}
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)

	if (bookings.isLoading) return <Loader />
	if (bookings.isError) return <>Error</>

	return (
		<>
			<OccupantsListEmpty isShown={checkedInBookings.length === 0} />
			<OccupantsList listData={checkedInBookings} showCheckInModal={initializeModal} />
			<OccupantModal isOpen={modalOpened} closeModal={closeModal} data={{}} />
		</>
	)
}

export const Occupants = asDashboardCard(OccupantsContent)
