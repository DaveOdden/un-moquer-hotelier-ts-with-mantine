import { Text } from '@mantine/core'
import { asDashboardCard } from '../asDashboardCard'

export const TasksContent: React.FC<{}> = () => {
	return <Text>Tasks</Text>
}

export const Tasks = asDashboardCard(TasksContent)
