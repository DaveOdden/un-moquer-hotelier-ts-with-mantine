import { Button, Grid } from '@mantine/core'

export const Square: React.FC<{ value: number; onSquareClick(): any }> = ({
	value,
	onSquareClick,
}) => {
	return (
		<Grid.Col span={4} h="100">
			<Button variant="light" onClick={onSquareClick} className="square" w="100%" h="100%">
				{value}
			</Button>
		</Grid.Col>
	)
}
