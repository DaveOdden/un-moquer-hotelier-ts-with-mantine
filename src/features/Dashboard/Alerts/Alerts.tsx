import { Loader } from '@mantine/core'

import { useAlerts } from 'src/hooks/useAlertsQuery'
import { asDashboardCard } from '../asDashboardCard'
import { AlertsListEmpty } from './Empty/AlertsListEmpty'
import { AlertsList } from './List/AlertsList'

export const AlertsContent: React.FC<{}> = () => {
	const alerts = useAlerts()

	if (alerts.isLoading) return <Loader />
	if (alerts.isError) return <>Error</>

	console.log(alerts.data)

	return (
		<>
			<AlertsListEmpty isShown={alerts.data.length === 0} />
			<AlertsList listData={alerts.data} />
		</>
	)
}

export const Alerts = asDashboardCard(AlertsContent)
