import { Card, Title } from '@mantine/core'

import { GameBoard } from './GameBoard'
import classes from './TicTacToe.module.css'

export const TicTacToe = () => {
	return (
		<Card shadow="sm" radius="md" withBorder w="100%" h="100%" className={classes.fullHeight}>
			<Title order={3} mb="sm" className={classes.cardTitle}>
				Tic-Tac-Toe
			</Title>
			<GameBoard />
		</Card>
	)
}
