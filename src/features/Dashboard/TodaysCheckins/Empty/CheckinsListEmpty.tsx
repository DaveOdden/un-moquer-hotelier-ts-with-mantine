import { Stack, Flex, Text, Title, ThemeIcon } from '@mantine/core'
import { IconTriangles } from '@tabler/icons-react'
import dayjs from 'dayjs'

export const CheckinsListEmpty: React.FC<ICheckinsListEmpty> = ({ isShown, checkedIn }) => {
	return (
		isShown && (
			<Flex h="100%" mt="-lg" justify="center" align="center">
				<Stack justify="space-around" gap={0}>
					<ThemeIcon mx="auto" radius="xl" size="xl" mb="lg" color="gray">
						<IconTriangles style={{ width: '70%', height: '70%' }} />
					</ThemeIcon>
					<Title order={4} ta="center" c="dimmed" m={0}>
						No {!checkedIn ? 'Scheduled' : ''} Checkins
					</Title>
					<Text size="xs" ta="center" c="dimmed" m={0}>
						Last Updated: {dayjs().format('h:mm A')}
					</Text>
				</Stack>
			</Flex>
		)
	)
}

interface ICheckinsListEmpty {
	isShown: boolean
	checkedIn: boolean
}
