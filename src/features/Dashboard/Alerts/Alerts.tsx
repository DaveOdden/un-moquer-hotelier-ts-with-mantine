import { Text } from '@mantine/core'
import { asDashboardCard } from '../asDashboardCard'

export const AlertsContent: React.FC<{}> = () => {
	return <Text>Alerts</Text>
}

export const Alerts = asDashboardCard(AlertsContent)
