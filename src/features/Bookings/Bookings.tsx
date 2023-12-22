import { useState } from 'react'
import { Flex, Modal, TextInput, Drawer, Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

import { BookingsTable } from './BookingsTable'
import classes from './Bookings.module.css'

export const Bookings = () => {
	const [singleGuest, setSingleGuest] = useState('')
	const [modalOpened, setModalOpened] = useState(false)
	const [filteredText, setFilteredText] = useState('')

	const closeDetail = () => setSingleGuest('')
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)
	const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
		setFilteredText(event.target.value)

	return (
		<>
			<Flex mb="md" mih={36} justify="space-between" align="center" direction="row">
				<h1 className={classes.h1}>Bookings</h1>
				<Flex mih={36} gap="lg" justify="flex-end" align="center" direction="row">
					<TextInput w={225} radius="xl" onChange={onSearch} placeholder="Search Bookings" />
					<Button
						variant="filled"
						radius="md"
						onClick={openModal}
						leftSection={<IconPlus size={14} />}>
						New Booking
					</Button>
				</Flex>
			</Flex>
			<BookingsTable showGuestDetail={setSingleGuest} searchQuery={filteredText} />
			<Drawer
				position="right"
				opened={singleGuest !== ''}
				onClose={closeDetail}
				withCloseButton={false}></Drawer>
			<Modal
				size={500}
				opened={modalOpened}
				onClose={closeModal}
				title={<span className={classes.modalTitle}>New Guest</span>}
				transitionProps={{ transition: 'pop-top-right' }}></Modal>
		</>
	)
}
