import { useState } from 'react'
import { Loader } from '@mantine/core'

import { useAllFeatures } from 'src/hooks/useAllQuery'
import { asDashboardCard } from '../asDashboardCard'
import { getAdditionalDataForEachBooking } from 'src/features/Bookings/utils'
import { IAggregatedBooking } from 'src/utils/types'
import { WakeupCallListEmpty } from './Empty/WakeupCallListEmpty'
import { WakeupCallList } from './List/WakeupCallList'
import { WakeupCallModal } from './Modal/WakeupCallModal'

const WakeUpCallsContent: React.FC<{ title: string }> = () => {
	const [guests, bookings, rooms] = useAllFeatures()
	const [modalOpened, setModalOpened] = useState<boolean>(false)
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookings, rooms)
	const nonCheckedInBookings = aggregatedData.filter(
		(singleBooking: IAggregatedBooking) => singleBooking.checkedIn === true
	)

	const initializeModal = () => {
		openModal()
	}
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)

	if (guests.isLoading || rooms.isLoading || bookings.isLoading) return <Loader />
	if (guests.isError || rooms.isError || bookings.isError) return <>Error</>

	return (
		<>
			<WakeupCallListEmpty isShown={nonCheckedInBookings.length === 0} />
			<WakeupCallList listData={nonCheckedInBookings} showCheckInModal={initializeModal} />
			<WakeupCallModal isOpen={modalOpened} closeModal={closeModal} data={{}} />
		</>
	)
}
export const WakeUpCalls = asDashboardCard(WakeUpCallsContent)
