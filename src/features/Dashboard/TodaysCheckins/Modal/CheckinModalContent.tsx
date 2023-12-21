import { useState } from 'react'
import { Alert, Button, Center, Text, Flex, ActionIcon } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconTransferIn } from '@tabler/icons-react'
import dayjs from 'dayjs'

import { useCheckIn } from 'src/hooks/useBookingsQuery'
import { IAggregatedBooking } from 'src/utils/types'

export const Checkin: React.FC<ICheckin> = ({ record, closeModal }) => {
	const { mutate: checkInGuest } = useCheckIn()
	const [isLoading, setIsLoading] = useState(false)
	const [hasError, setHasError] = useState(false)

	const checkIn = () => {
		setIsLoading(true)
		checkInGuest(
			{ id: record._id, checkedIn: true },
			{
				onSuccess: handleSuccess,
				onError: handleError,
			}
		)
	}

	const handleSuccess = () => {
		notifications.show({
			color: 'green',
			title: 'Guest Checked In',
			message: `${record.guest.fullName} staying in room ${record.room.roomNum}`,
		})
		setTimeout(() => {
			setIsLoading(false)
			closeModal()
		}, 750)
	}

	const handleError = () => {
		setTimeout(() => {
			setIsLoading(false)
			setHasError(true)
		}, 1000)
	}

	return (
		<Center>
			<Flex direction="column" align="center" mx="auto" px="md" py="sm">
				<Text mt="-xl" mb="xl" size="sm" c="dimmed">
					{dayjs().format('h:mm A')}
				</Text>
				<ActionIcon
					variant="filled"
					color="gray.4"
					size={100}
					radius="100rem"
					aria-label="Settings">
					<IconTransferIn style={{ width: '70%', height: '70%' }} stroke={1.5} />
				</ActionIcon>
				<Text mt="lg">
					{record.guest.firstName} {record.guest.lastName}
				</Text>
				<Text size="sm" c="dimmed">
					{record._id}
				</Text>
				<Button mt="lg" onClick={checkIn} loading={isLoading}>
					Confirm Checkin
				</Button>
				{hasError && (
					<Alert variant="light" color="red" title="API Error" mt="lg" withCloseButton>
						Unable to check-in guest.
					</Alert>
				)}
			</Flex>
		</Center>
	)
}

interface ICheckin {
	record: IAggregatedBooking
	closeModal(): void
}
