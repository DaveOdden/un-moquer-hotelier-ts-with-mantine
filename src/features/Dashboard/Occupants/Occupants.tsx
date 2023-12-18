import { Text, Box, Stack } from '@mantine/core'
import filter from 'lodash/filter'

import { asDashboardCard } from '../asDashboardCard'
import { useGuests } from 'src/hooks/useGuestsQuery'
import { findMatchesByKey } from 'src/features/Guests/utils'

export const OccupantsContent = () => {
	const guests = useGuests()
	const occupants = filter(guests.data, (record: any) => findMatchesByKey(record, 'occupants'))

	return (
		<Box px="md">
			{occupants.map((occupant) => {
				console.log(occupant)
				return (
					<Stack key={occupant._id} justify="flex-start" gap={0} align="flex-start">
						<Text fw={500} c="dimmed" size="sm">
							{occupant.fullName}
						</Text>
					</Stack>
				)
			})}
		</Box>
	)
}

export const Occupants = asDashboardCard(OccupantsContent)
