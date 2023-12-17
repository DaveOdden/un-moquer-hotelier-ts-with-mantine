import { useState } from 'react'
import { Grid, Transition } from '@mantine/core'
import { XIcon } from './XIcon'
import { OIcon } from './OIcon'

import { Square } from './Square'
import { GameCompleted } from './GameCompleted'
import { GameTied } from './GameTied'

const emptyGame = Array(9).fill(null)

export const GameBoard = () => {
	const [xIsNext, setXIsNext] = useState(true)
	const [squares, setSquares] = useState(emptyGame)
	const [displaySquare, setDisplaySquare] = useState(emptyGame)

	const resetGame = () => {
		setSquares(emptyGame)
		setDisplaySquare(emptyGame)
		setXIsNext(true)
	}

	const calculateDraw = (squares: Array<string | null>) => !squares.includes(null)

	const calculateWinner = (squares: Array<string | null>) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a]
			}
		}
		return null
	}

	const handleSquareClick = (index: number) => {
		if (squares[index] || calculateWinner(squares)) return
		const nextSquares = squares.slice()
		const nextDisplaySquare = displaySquare.slice()
		xIsNext ? (nextSquares[index] = 'x') : (nextSquares[index] = 'o')
		xIsNext ? (nextDisplaySquare[index] = <XIcon />) : (nextDisplaySquare[index] = <OIcon />)
		setSquares(nextSquares)
		setDisplaySquare(nextDisplaySquare)
		setXIsNext(!xIsNext)
	}

	const isDraw = calculateDraw(squares)
	const winner = calculateWinner(squares)

	if (isDraw) return <GameTied isDraw={isDraw} reset={resetGame} />

	return (
		<>
			<GameCompleted winner={winner} reset={resetGame} />
			<Transition
				mounted={winner === null}
				transition="slide-up"
				duration={500}
				timingFunction="ease">
				{(styles) => (
					<Grid style={styles}>
						{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
							<Square
								value={displaySquare[item]}
								onSquareClick={() => handleSquareClick(item)}
								key={item}
							/>
						))}
					</Grid>
				)}
			</Transition>
		</>
	)
}
