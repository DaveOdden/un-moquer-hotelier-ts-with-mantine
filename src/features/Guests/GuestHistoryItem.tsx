import { Text, Code, Timeline, Popover } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconGitBranch } from '@tabler/icons-react'

export const GuestHistoryItem = (props: renderProps) => {
	const { entry } = props
	const [opened, { close, open }] = useDisclosure(false)

	dayjs.extend(relativeTime)

	return (
		<Popover width={450} position="bottom" withArrow shadow="md" opened={opened}>
			<Popover.Target>
				<Timeline.Item
					bullet={<IconGitBranch size={12} />}
					title={entry.action}
					onMouseEnter={open}
					onMouseLeave={close}>
					<Text c="dimmed" size="xs" mt={4}>
						{dayjs().to(dayjs(entry.date))}
						<Text px="xs" span>
							|
						</Text>
						by {entry.by}
					</Text>
				</Timeline.Item>
			</Popover.Target>
			<Popover.Dropdown style={{ pointerEvents: 'none' }}>
				<Code block style={{ whiteSpace: 'pre-line' }}>
					{JSON.stringify(entry.data)}
				</Code>
			</Popover.Dropdown>
		</Popover>
	)
}

interface renderProps {
	entry: any
}
