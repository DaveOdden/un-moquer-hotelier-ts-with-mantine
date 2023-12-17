import { Box, Button, Center, Transition, Flex, Title, ThemeIcon } from '@mantine/core'
import { XIcon } from './XIcon'
import { OIcon } from './OIcon'

export const GameCompleted: React.FC<{ winner: string | null; reset(): void }> = ({
	winner,
	reset,
}) => {
	return (
		<Box h="100%" w="100%" style={{ position: 'absolute', left: '0', top: '0' }}>
			<Center h="100%">
				<Transition
					mounted={winner != null}
					transition="slide-down"
					duration={500}
					exitDuration={1}
					timingFunction="ease">
					{(styles) => (
						<Box style={styles}>
							<Flex h="100%" mt="-lg" justify="center" align="center" direction="column">
								<Title order={3} c="dark.4">
									Winner!
								</Title>
								<ThemeIcon radius="xl" size="xl" my="lg">
									{winner === 'x' ? <XIcon /> : <OIcon />}
								</ThemeIcon>
								<Button variant="light" onClick={reset}>
									Play Again
								</Button>
							</Flex>
						</Box>
					)}
				</Transition>
			</Center>
		</Box>
	)
}
