import { useGuest } from '../../hooks/useGuestsQuery'
import { Card, List, Text, Box, Divider } from '@mantine/core'
import classes from './Guests.module.css'

export const GuestDetail = (props: renderProps) => {
	const { guestId } = props
	const guest = useGuest(guestId)

	return (
		<Card className={classes.detail}>
			<h2>
				{guest?.firstName} {guest?.lastName}
			</h2>
			<Text size="xs" c="dimmed">
				{guest?._id}
			</Text>
			<Box my="xl" pl="md">
				<List listStyleType="none">
					<List.Item py="sm">
						<Text>Phone Number</Text>
						<Text size="sm" c="dimmed" fw={400}>
							{guest?.phone}
						</Text>
					</List.Item>
					<List.Item py="sm">
						<Text>Email</Text>
						<Text size="sm" c="dimmed" fw={400}>
							{guest?.email}
						</Text>
					</List.Item>
					<List.Item py="sm">
						<Text>Date of Birth</Text>
						<Text size="sm" c="dimmed" fw={400}>
							{guest?.dob}
						</Text>
					</List.Item>
					<List.Item py="sm">
						<Text>License Number</Text>
						<Text size="sm" c="dimmed" fw={400}>
							{guest?.licenseNumber}
						</Text>
					</List.Item>
					<List.Item py="sm">
						<Text>Address</Text>
						<Text size="sm" c="dimmed" fw={400}>
							{guest?.address.address1}
						</Text>
						<Text size="sm" c="dimmed" fw={400}>
							{guest?.address.address2}
						</Text>
						<Text size="sm" c="dimmed" fw={400}>
							{guest?.address.city} {guest?.address.state}
							{', '}
							{guest?.address.zip}
						</Text>
					</List.Item>
					<Divider my="md" />
					<List.Item py="sm">
						<Text size="sm">
							<Text fw={600} span>
								Member Since:{' '}
							</Text>{' '}
							<Text c="dimmed" span>
								{guest?.signUpDate}
							</Text>
						</Text>
					</List.Item>
				</List>
			</Box>
		</Card>
	)
}

interface renderProps {
	guestId: string
}
