import { Flex, Grid } from '@mantine/core'

import { TodaysCheckins } from './TodaysCheckins/TodaysCheckins'
import { Alerts } from './Alerts/Alerts'
import { Tasks } from './Tasks/Tasks'
import { NoShows } from './NoShows/NoShows'
import { TicTacToe } from './Games/TicTacToe/TicTacToe'
import { WakeUpCalls } from './WakeUpCalls/WakeUpCalls'
import { Occupants } from './Occupants/Occupants'

const HEIGHT = 365

export const Dashboard: React.FC<{}> = () => {
	return (
		<>
			<Flex mb="md" mih={36} justify="space-between" align="center" direction="row">
				<h1>Dashboard</h1>
			</Flex>
			<Grid>
				<Grid.Col span={3} h={HEIGHT}>
					<TodaysCheckins title="Today's Checkins" checkedIn={true} />
				</Grid.Col>
				<Grid.Col span={3} h={HEIGHT}>
					<TodaysCheckins title="Scheduled Checkins" checkedIn={false} />
				</Grid.Col>
				<Grid.Col span={3} h={HEIGHT}>
					<NoShows title="No Shows" />
				</Grid.Col>
				<Grid.Col span={3} h={HEIGHT}>
					<WakeUpCalls title="Wake-up Calls" />
				</Grid.Col>
				<Grid.Col span={3} h={HEIGHT}>
					<Occupants title="Occupants" />
				</Grid.Col>
				<Grid.Col span={3} h={HEIGHT}>
					<Tasks title="Tasks" />
				</Grid.Col>
				<Grid.Col span={3} h={HEIGHT}>
					<Alerts title="Alerts" />
				</Grid.Col>
				<Grid.Col span={3} h={HEIGHT}>
					<TicTacToe title="Tic-Tac-Toe" />
				</Grid.Col>
			</Grid>
		</>
	)
}
