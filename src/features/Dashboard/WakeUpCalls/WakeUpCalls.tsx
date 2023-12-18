import { Text } from '@mantine/core'
import { asDashboardCard } from '../asDashboardCard'

const WakeUpCallsContent: React.FC<{ title: string; checkedIn: boolean }> = ({ title }) => {
	return <Text>Test</Text>
}

export const WakeUpCalls = asDashboardCard(WakeUpCallsContent)
