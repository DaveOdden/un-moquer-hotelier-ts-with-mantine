import { Checkbox } from '@mantine/core'

import { useGuest } from 'src/hooks/useGuestsQuery'

export const WakeUpCall: React.FC<IGuestHistory> = ({ guestId = '' }) => {
	const guest = useGuest(guestId)

	return <></>
}

interface IGuestHistory {
	guestId?: string
}
