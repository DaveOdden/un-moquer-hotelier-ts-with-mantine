import sortBy from 'lodash/sortBy'
import { Timeline } from '@mantine/core'

import { useGuest } from '../../hooks/useGuestsQuery'
import { IHistory } from 'src/utils/types'
import { GuestHistoryItem } from './GuestHistoryItem'

export const GuestHistory = (props: renderProps) => {
	const { guestId } = props
	const guest = useGuest(guestId)
	const sortedHistory = sortBy(guest.history, 'date').reverse()

	return (
		<Timeline bulletSize={24} lineWidth={2}>
			{sortedHistory.map((item: IHistory) => (
				<GuestHistoryItem key={item.id} entry={item} />
			))}
		</Timeline>
	)
}

interface renderProps {
	guestId: string
}
