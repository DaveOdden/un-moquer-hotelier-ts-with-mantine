import { Flex, Grid } from '@mantine/core'

import { TodaysCheckins } from './TodaysCheckins/TodaysCheckins'
// import { VerticalCardList } from './TodaysCheckins/+++VerticalCardList'
import { Alerts } from './Alerts/Alerts'
import { Tasks } from './Tasks/Tasks'
import { NoShows } from './NoShows/NoShows'
import { TicTacToe } from './Games/TicTacToe/TicTacToe'

export const Dashboard: React.FC<{}> = () => {
	return (
		<>
			<Flex mb="md" mih={36} justify="space-between" align="center" direction="row">
				<h1>Dashboard</h1>
			</Flex>
			<Grid>
				<Grid.Col span={3} h="365">
					<TodaysCheckins title="Today's Checkins" checkedIn={true} />
				</Grid.Col>
				<Grid.Col span={3} h="365">
					<TodaysCheckins title="Scheduled Checkins" checkedIn={false} />
				</Grid.Col>
				<Grid.Col span={3} h="365">
					<NoShows />
				</Grid.Col>
				<Grid.Col span={3} h="365">
					<Alerts />
				</Grid.Col>
				<Grid.Col span={3} h="365">
					<Tasks />
				</Grid.Col>
				<Grid.Col span={3} h="365">
					<TicTacToe />
				</Grid.Col>
			</Grid>
		</>
	)
}
