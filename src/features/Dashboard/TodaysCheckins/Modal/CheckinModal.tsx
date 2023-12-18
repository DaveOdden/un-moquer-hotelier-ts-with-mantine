import { Modal, Text } from '@mantine/core'
import dayjs from 'dayjs'

import { Checkin } from 'src/features/Dashboard/TodaysCheckins/Modal/CheckinModalContent'

export const CheckinModal: React.FC<{ isOpen: boolean; closeModal(): void; data: any }> = ({
	isOpen,
	closeModal,
	data,
}) => {
	return (
		<Modal.Root size={500} opened={isOpen} onClose={closeModal}>
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Header>
					<Modal.Title>
						<Text size="xs" c="dimmed" pl="md" mt="-xs">
							{dayjs().format('h:mm A')}
						</Text>
					</Modal.Title>
					<Modal.CloseButton />
				</Modal.Header>
				<Modal.Body>
					<Checkin record={data} closeModal={closeModal} />
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	)
}
