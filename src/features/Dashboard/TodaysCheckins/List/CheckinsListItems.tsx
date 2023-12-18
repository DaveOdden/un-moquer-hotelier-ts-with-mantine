import { Group, Card, Stack, Text, Button, Title } from '@mantine/core'
import dayjs from 'dayjs'

import { ListItemIcon } from './Components/ListItemIcon'
import classes from '../TodaysCheckins.module.css'

export const CheckinsListItems: React.FC<{
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
			<Group align="center" justify="space-between" gap={0} wrap="nowrap">
				<Group align="center" justify="flex-start" wrap="nowrap">
					<ListItemIcon
						checkedIn={checkinRecord.checkedIn}
						checkinDate={checkinRecord.checkinDate}
					/>
					<Stack justify="flex-start" gap={0} align="flex-start">
						<Text fw={500} c="dimmed" size="sm" lineClamp={1}>
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
