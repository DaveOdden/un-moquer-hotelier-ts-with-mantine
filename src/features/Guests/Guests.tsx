import { useState } from 'react'
import { Flex, Modal, TextInput, Drawer, Button, ActionIcon, SegmentedControl } from '@mantine/core'
import { IconPlus, IconX } from '@tabler/icons-react'

import { GuestTable } from './GuestTable'
import { GuestDetail } from './GuestDetail'
import { NewGuest } from './NewGuest'
import classes from './Guests.module.css'

export const Guests = () => {
	const [drawerOpened, setDrawerOpen] = useState(false)
	const [singleGuest, setSingleGuest] = useState('')
	const [modalOpened, setModalOpened] = useState(false)
	const [filteredText, setFilteredText] = useState('')
	const [filterOption, setFilterOption] = useState('all')

	const closeDetail = () => setDrawerOpen(false)
	const openModal = () => setModalOpened(true)
	const closeModal = () => setModalOpened(false)
	const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
		setFilteredText(event.target.value)
	const clearSearch = () => setFilteredText('')
	const showGuestDetail = (id: string) => {
		setSingleGuest(id)
		setDrawerOpen(true)
	}

	return (
		<>
			<Flex mb="md" mih={36} justify="space-between" align="center" direction="row">
				<h1 className={classes.h1}>Guests</h1>
				<SegmentedControl
					value={filterOption}
					onChange={setFilterOption}
					data={[
						{ value: 'all', label: 'All' },
						{ value: 'occupants', label: 'Occupants' },
						{ value: 'upcoming', label: 'Upcoming' },
						{ value: 'members', label: 'Star Members' },
						{ value: 'banned', label: 'Banned' },
					]}
					styles={{
						root: { backgroundColor: '#f5f2f0' },
					}}
				/>
				<Flex mih={36} gap="lg" justify="flex-end" align="center" direction="row">
					<TextInput
						w={225}
						radius="xl"
						value={filteredText}
						onChange={onSearch}
						placeholder="Search Guests"
						rightSection={
							filteredText && (
								<ActionIcon variant="transparent" color="gray" onClick={clearSearch}>
									<IconX size={14} />
								</ActionIcon>
							)
						}
					/>
					<Button
						variant="filled"
						radius="md"
						onClick={openModal}
						leftSection={<IconPlus size={14} />}>
						New Guest
					</Button>
				</Flex>
			</Flex>
			<GuestTable
				showGuestDetail={showGuestDetail}
				searchQuery={filteredText}
				filterOption={filterOption}
			/>
			<Drawer position="right" opened={drawerOpened} onClose={closeDetail} withCloseButton={false}>
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
