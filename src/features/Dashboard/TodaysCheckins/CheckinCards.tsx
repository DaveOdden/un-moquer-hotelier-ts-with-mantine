import {
	Group,
	Card,
	Stack,
	Text,
	Button,
	Title,
	RingProgress,
	Center,
	ThemeIcon,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

import dayjs from 'dayjs'

import { StatusCircle } from './StatusCircle'
import classes from './TodaysCheckins.module.css'

export const VerticalCheckinCards: React.FC<{
	checkinRecord: any
	initializeModal(record: any): void
}> = ({ checkinRecord, initializeModal }) => {
	return (
		<Card
			px="lg"
			py="md"
			w="100%"
			shadow="none"
			radius={0}
			style={{ flexShrink: 0, borderBottom: `1px solid var(--mantine-color-gray-3)` }}>
			<Group align="center" justify="space-between">
				<Group align="center" justify="flex-start">
					{checkinRecord.checkedIn && (
						<RingProgress
							size={40}
							roundCaps
							thickness={4}
							sections={[{ value: 100, color: 'teal' }]}
							label={
								<Center>
									<ThemeIcon color="teal" variant="light" radius="xl" size="sm">
										<IconCheck size={16} />
									</ThemeIcon>
								</Center>
							}
						/>
					)}
					{checkinRecord.checkedIn === false && (
						<StatusCircle checkinDateTime={checkinRecord.checkinDate} />
					)}
					<Stack justify="flex-start" gap={0} align="flex-start">
						<Text fw={500} c="dimmed" size="sm">
							{checkinRecord.guest.fullName}
						</Text>
						<Title order={2} className={classes.listItemTitle} c="dark.5">
							{dayjs(checkinRecord.checkinDate).format('h:mm a')}
						</Title>
					</Stack>
				</Group>
				{checkinRecord.checkedIn === false && (
					<Button
						size="xs"
						color="blue"
						mt="md"
						radius="md"
						onClick={() => initializeModal(checkinRecord)}>
						Check In
					</Button>
				)}
			</Group>
		</Card>
	)
}
