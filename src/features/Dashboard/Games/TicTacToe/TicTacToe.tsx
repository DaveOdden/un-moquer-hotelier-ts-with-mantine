import { asDashboardCard } from '../../asDashboardCard'

import { GameBoard } from './GameBoard'
// import classes from './TicTacToe.module.css'

export const TicTacToeContent = () => {
	return <GameBoard />
}

export const TicTacToe = asDashboardCard(TicTacToeContent)
