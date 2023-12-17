import { ActionIcon } from '@mantine/core'
import { IconAlertTriangle, IconMoonStars, IconSunset2 } from '@tabler/icons-react'
import dayjs from 'dayjs'

export const StatusCircle: React.FC<{ checkinDateTime: string }> = ({ checkinDateTime }) => {
	const isNight = dayjs(checkinDateTime).isAfter(
		dayjs().set('hour', 17).set('minute', 0).set('second', 0),
		'hour'
	)
	const isNoon = dayjs(checkinDateTime).isAfter(
		dayjs().set('hour', 11).set('minute', 59).set('second', 59),
		'hour'
	)
	// const isMorning = dayjs(checkinDateTime).isAfter(
	// 	dayjs().set('hour', 1).set('minute', 0).set('second', 0),
	// 	'hour'
	// )
	const isLate = dayjs(checkinDateTime).isBefore(dayjs(), 'second')

	if (isLate) {
		return (
			<ActionIcon color="red.5" variant="filled" aria-label="Settings" radius="xl">
				<IconAlertTriangle style={{ width: '70%', height: '70%' }} stroke={1.5} />
			</ActionIcon>
		)
	}

	let render = {
		icon: IconSunset2,
		color: 'yellow',
	}

	if (isNoon) {
		render.icon = IconSunset2
		render.color = 'cyan.5'
	}

	if (isNight) {
		render.icon = IconMoonStars
		render.color = 'gray.6'
	}

	return (
		<ActionIcon color={render.color} variant="filled" aria-label="Settings" radius="xl">
			<render.icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
		</ActionIcon>
	)
}
