import { Loader, Flex } from '@mantine/core'

export const LoadingState = () => {
	return (
		<Flex justify="center" align="center" h="100%">
			<Loader color="blue" mt="-xl" />
		</Flex>
	)
}
