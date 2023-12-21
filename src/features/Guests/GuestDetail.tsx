import { useGuest } from '../../hooks/useGuestsQuery'
import {
	Menu,
	Group,
	Badge,
	Card,
	List,
	Text,
	Box,
	Divider,
	Accordion,
	Button,
	rem,
} from '@mantine/core'
import { IconPhoneCall, IconPencilPlus, IconSettings, IconTrash } from '@tabler/icons-react'

import { GuestHistory } from './GuestHistory'
import classes from './Guests.module.css'

export const GuestDetail: React.FC<{
	guestId: string
	setDrawerSize: React.Dispatch<React.SetStateAction<any>>
}> = ({ guestId, setDrawerSize }) => {
	const guest = useGuest(guestId)

	const showWakeUpCall = () => {
		setDrawerSize('xl')
	}

	return (
		<Card className={classes.detail}>
			<Group justify="space-between">
				<Box>
					{guest?.status.toLowerCase() === 'banned' && <Badge color="red">Banned</Badge>}
					<h2>
						{guest?.firstName} {guest?.lastName}
					</h2>
					<Text size="xs" c="dimmed">
						{guest?._id}
					</Text>
				</Box>
				<Menu shadow="md" width={200} position="bottom-end">
					<Menu.Target>
						<Button variant="default" mt="-sm">
							<IconSettings style={{ width: rem(14), height: rem(14) }} />
							<Box ml={4}>Actions</Box>
						</Button>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Label>Services</Menu.Label>
						<Menu.Item
							leftSection={<IconPhoneCall style={{ width: rem(14), height: rem(14) }} />}
							onClick={showWakeUpCall}>
							Create Wake-up Call
						</Menu.Item>
						<Menu.Label>Guest Record</Menu.Label>
						<Menu.Item leftSection={<IconPencilPlus style={{ width: rem(14), height: rem(14) }} />}>
							Update Guest Info
						</Menu.Item>
						<Menu.Item
							color="red"
							leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}>
							Delete Guest
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Group>
			<Box my="xl" pl="md">
				<List listStyleType="none">
					<List.Item py="sm">
						<Text size="sm" c="dimmed" fw={400}>
							Phone Number
						</Text>
						<Text>{guest?.phone}</Text>
					</List.Item>
					<List.Item py="sm">
						<Text size="sm" c="dimmed" fw={400}>
							Email
						</Text>
						<Text>{guest?.email}</Text>
					</List.Item>
					<List.Item py="sm">
						<Text size="sm" c="dimmed" fw={400}>
							Date of Birth
						</Text>
						<Text>{guest?.dob}</Text>
					</List.Item>
					<List.Item py="sm">
						<Text size="sm" c="dimmed" fw={400}>
							License Number
						</Text>
						<Text>{guest?.licenseNumber}</Text>
					</List.Item>
					<List.Item py="sm">
						<Text size="sm" c="dimmed" fw={400}>
							Address
						</Text>
						<Text>{guest?.address.address1}</Text>
						<Text>{guest?.address.address2}</Text>
						<Text>
							{guest?.address.city} {guest?.address.state}
							{', '}
							{guest?.address.zip}
						</Text>
					</List.Item>
					<Divider my="md" />
					<List.Item py="sm">
						<Text size="sm" c="dimmed" fw={400}>
							Member Since
						</Text>
						<Text>{guest?.signUpDate}</Text>
					</List.Item>
				</List>
			</Box>
			{guest?.history.length > 0 && (
				<Accordion variant="contained">
					<Accordion.Item value="photos">
						<Accordion.Control>Guest History</Accordion.Control>
						<Accordion.Panel pt="lg">
							<GuestHistory guestId={guest?._id} />
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			)}
		</Card>
	)
}
