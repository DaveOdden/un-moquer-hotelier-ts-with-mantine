import { useState } from 'react'
import { useAllFeatures } from '../../hooks/useAllQuery'
import { LoadingOverlay } from '@mantine/core'
import { DataTable, type DataTableSortStatus } from 'mantine-datatable'
import sortBy from 'lodash/sortBy'
import filter from 'lodash/filter'
import { findMatches } from './utils'
import { getAdditionalDataForEachBooking } from './utils'
import { TABLE_HEIGHT } from 'src/utils/constants'

export const BookingsTable = (props: GuestTableProps) => {
	const { showGuestDetail, searchQuery } = props
	const [guests, bookings, rooms] = useAllFeatures()
	const aggregatedData = getAdditionalDataForEachBooking(guests, bookings, rooms)
	const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
		columnAccessor: 'lastName',
		direction: 'asc',
	})

	const sortedData = sortBy(aggregatedData, sortStatus.columnAccessor)
	const records = sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData
	const sortedAndFilteredData = filter(records, (record) => findMatches(record, searchQuery))

	if (bookings.isPending)
		return <LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />

	return (
		<DataTable
			style={{ height: TABLE_HEIGHT }}
			verticalSpacing="md"
			withTableBorder
			borderRadius="lg"
			highlightOnHover
			records={sortedAndFilteredData}
			sortStatus={sortStatus}
			onSortStatusChange={setSortStatus}
			columns={[
				{
					width: '7rem',
					accessor: 'room.roomNum',
					title: 'Room #',
					textAlign: 'center',
					sortable: true,
				},
				{
					width: '17rem',
					accessor: 'guest.fullName',
					title: 'Guest Name',
					sortable: true,
				},
				{ accessor: 'checkinDateReadable' },
				{ accessor: 'checkoutDateReadable' },
				{ accessor: '_id', title: 'Confirmation #' },
			]}
			onRowClick={({ record: { _id } }) => showGuestDetail(_id)}
			idAccessor="_id"
			{...{ stickyHeader: true }}
		/>
	)
}

interface GuestTableProps {
	showGuestDetail: React.Dispatch<React.SetStateAction<any>>
	searchQuery: string
}
