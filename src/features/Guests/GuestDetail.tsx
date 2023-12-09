import { useGuest } from '../../hooks/useGuestsQuery'
import { Card } from '@mantine/core'

export const GuestDetail = (props: renderProps) => {
	const { guestId } = props
	const guest = useGuest(guestId)

	return (
		<Card>
			{guest?.firstName} {guest?.lastName}
		</Card>
	)
}

interface renderProps {
	guestId: string
}
