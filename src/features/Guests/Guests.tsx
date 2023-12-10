import { useState } from 'react'
import { Flex, Modal, TextInput, Drawer, Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

import { GuestTable } from './GuestTable'
import { GuestDetail } from './GuestDetail'
import { NewGuest } from './NewGuest'
import classes from './Guests.module.css'

export const Guests = () => {
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
				<h1 className={classes.h1}>Guests</h1>
				<Flex mih={36} gap="lg" justify="flex-end" align="center" direction="row">
					<TextInput w={225} radius="xl" onChange={onSearch} placeholder="Search Guests" />
					<Button
						variant="filled"
						radius="md"
						onClick={openModal}
						leftSection={<IconPlus size={14} />}>
						New Guest
					</Button>
				</Flex>
			</Flex>
			<GuestTable showGuestDetail={setSingleGuest} searchQuery={filteredText} />
			<Drawer
				position="right"
				opened={singleGuest !== ''}
				onClose={closeDetail}
				withCloseButton={false}>
				<GuestDetail guestId={singleGuest} />
			</Drawer>
			<Modal
				size={500}
				opened={modalOpened}
				onClose={closeModal}
				title={<span className={classes.modalTitle}>New Guest</span>}
				transitionProps={{ transition: 'pop-top-right' }}>
				<NewGuest closeModal={closeModal} />
			</Modal>
		</>
	)
}
