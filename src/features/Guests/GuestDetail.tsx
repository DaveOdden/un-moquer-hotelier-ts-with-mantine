import { useGuest } from '../../hooks/useGuestsQuery'
import { Badge, Card, List, Text, Box, Divider, Accordion } from '@mantine/core'
import classes from './Guests.module.css'

import { GuestHistory } from './GuestHistory'

export const GuestDetail = (props: renderProps) => {
	const { guestId } = props
	const guest = useGuest(guestId)

	return (
		<Card className={classes.detail}>
			{guest?.status === 'banned' && <Badge color="red">Banned</Badge>}
			<h2>
				{guest?.firstName} {guest?.lastName}
			</h2>
			<Text size="xs" c="dimmed">
				{guest?._id}
			</Text>
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

interface renderProps {
	guestId: string
}
