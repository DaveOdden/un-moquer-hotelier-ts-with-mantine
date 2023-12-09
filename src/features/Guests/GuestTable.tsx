import { useState } from 'react'
import { useGuests } from '../../hooks/useGuestsQuery'
import { LoadingOverlay } from '@mantine/core'
import { DataTable, type DataTableSortStatus } from 'mantine-datatable'
import sortBy from 'lodash/sortBy'
import filter from 'lodash/filter'
import { findMatches } from './utils'

export const GuestTable = (props: renderProps) => {
	const { showGuestDetail, searchQuery } = props
	const guests = useGuests()
	const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
		columnAccessor: 'lastName',
		direction: 'asc',
	})

	const sortedData = sortBy(guests.data, sortStatus.columnAccessor)
	const records = sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData
	const sortedAndFilteredData = filter(records, (record) => findMatches(record, searchQuery))

	if (guests.isPending)
		return <LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />

	return (
		<DataTable
			verticalSpacing="md"
			withTableBorder
			borderRadius="lg"
			highlightOnHover
			records={sortedAndFilteredData}
			sortStatus={sortStatus}
			onSortStatusChange={setSortStatus}
			columns={[
				{
					width: '10rem',
					accessor: 'firstName',
					title: 'First Name',
					textAlign: 'right',
					sortable: true,
				},
				{
					width: '12rem',
					accessor: 'lastName',
					title: 'Last Name',
					sortable: true,
				},
				{
					accessor: 'email',
				},
				{ accessor: 'dob' },
			]}
			onRowClick={({ record: { _id } }) => showGuestDetail(_id)}
			idAccessor="_id"
		/>
	)
}

interface renderProps {
	showGuestDetail: React.Dispatch<React.SetStateAction<any>>
	searchQuery: string
}
