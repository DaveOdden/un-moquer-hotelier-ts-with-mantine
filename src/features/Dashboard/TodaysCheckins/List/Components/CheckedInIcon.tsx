import { RingProgress, Center, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

export const CheckedInIcon: React.FC<{}> = () => {
	return (
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
	)
}
