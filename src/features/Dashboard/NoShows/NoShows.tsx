import { Text } from '@mantine/core'
import { asDashboardCard } from '../asDashboardCard'

const NoShowsContent: React.FC<{ title: string }> = () => {
	return <Text>No Shows</Text>
}
export const NoShows = asDashboardCard(NoShowsContent)
