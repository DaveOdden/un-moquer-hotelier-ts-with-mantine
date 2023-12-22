import { Flex, Grid } from '@mantine/core'

import { TodaysCheckins } from './TodaysCheckins/TodaysCheckins'
import { Alerts } from './Alerts/Alerts'
import { Tasks } from './Tasks/Tasks'
import { NoShows } from './NoShows/NoShows'
import { TicTacToe } from './Games/TicTacToe/TicTacToe'
import { WakeUpCalls } from './WakeUpCalls/WakeUpCalls'
import { Occupants } from './Occupants/Occupants'

const HEIGHT = 365
const gridComponents = [
	<TodaysCheckins title="Today's Checkins" checkedIn={true} />,
	<TodaysCheckins title="Scheduled Checkins" checkedIn={false} />,
	<NoShows title="No Shows" />,
	<WakeUpCalls title="Wake-up Calls" />,
	<Occupants title="Occupants" />,
	<Tasks title="Tasks" />,
	<Alerts title="Alerts" />,
	<TicTacToe title="Tic-Tac-Toe" />,
]

export const Dashboard: React.FC<{}> = () => {
	return (
		<>
			<Flex mb="md" mih={36} justify="space-between" align="center" direction="row">
				<h1>Dashboard</h1>
			</Flex>
			<Grid>
				{gridComponents.map((Component) => (
					<Grid.Col key={Component.props.title} span={3} h={HEIGHT}>
						{Component}
					</Grid.Col>
				))}
			</Grid>
		</>
	)
}
