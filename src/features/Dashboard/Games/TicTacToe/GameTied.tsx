import { Box, Button, Center, Transition, Flex, Title, ThemeIcon } from '@mantine/core'
import { IconDirectionArrows } from '@tabler/icons-react'

export const GameTied: React.FC<{ isDraw: boolean; reset(): void }> = ({ isDraw, reset }) => {
	return (
		<Box h="100%" w="100%" style={{ position: 'absolute', left: '0', top: '0' }}>
			<Center h="100%">
				<Transition
					mounted={isDraw}
					transition="slide-down"
					duration={500}
					exitDuration={1}
					timingFunction="ease">
					{(styles) => (
						<Box style={styles}>
							<Flex h="100%" mt="-lg" justify="center" align="center" direction="column">
								<Title order={3} c="dark.4">
									Draw!!
								</Title>
								<ThemeIcon bg="dark.3" radius="xl" size="xl" my="lg">
									<IconDirectionArrows />
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
