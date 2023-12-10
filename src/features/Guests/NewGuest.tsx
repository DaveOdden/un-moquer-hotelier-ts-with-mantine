import { useState } from 'react'
import { Alert, TextInput, InputBase, Button, Group, Box } from '@mantine/core'
import { useForm, isNotEmpty, hasLength, isEmail } from '@mantine/form'
import { IMaskInput } from 'react-imask'
import { notifications } from '@mantine/notifications'

import { useCreateGuest } from '../../hooks/useGuestsQuery'
import { convertFormDataForAPI } from './utils'

export const NewGuest = (props: NewGuestProps) => {
	const { closeModal } = props
	const { mutate: addGuest } = useCreateGuest()
	const [isLoading, setIsLoading] = useState(false)
	const [hasError, setHasError] = useState(false)

	const submitForm = (values: any) => {
		setIsLoading(true)
		addGuest(convertFormDataForAPI(values), {
			onSuccess: (values) => handleSuccess(values),
			onError: handleError,
		})
	}

	const handleSuccess = (values: any) => {
		notifications.show({
			title: 'Guest Added',
			message: `${values.firstName} ${values.lastName} is now a guest`,
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

	const resetError = () => setHasError(false)

	const form = useForm({
		initialValues: {},
		validate: {
			firstName: isNotEmpty('First Name Required'),
			lastName: isNotEmpty('Last Name Required'),
			email: isEmail('Invalid email'),
			phone: isNotEmpty('Phone Number Required'),
			dob: isNotEmpty('D.O.B. Required'),
			licenseNumber: isNotEmpty('License Required'),
			address1: isNotEmpty('Address Required'),
			state: hasLength({ min: 2, max: 2 }, 'Invalid'),
			city: isNotEmpty('City Required'),
			zip: isNotEmpty('ZipCode Required'),
		},
	})

	return (
		<Box mx="auto" px="md" py="sm">
			<form onSubmit={form.onSubmit((values) => submitForm(values))}>
				<Group grow gap="lg">
					<TextInput
						mb="md"
						label="First Name"
						placeholder="John"
						{...form.getInputProps('firstName')}
					/>
					<TextInput
						mb="md"
						label="Last Name"
						placeholder="Smith"
						{...form.getInputProps('lastName')}
					/>
				</Group>
				<Group grow gap="lg">
					<TextInput
						mb="md"
						label="Email"
						placeholder="your@email.com"
						{...form.getInputProps('email')}
					/>
					<InputBase
						mb="md"
						label="Phone Number"
						component={IMaskInput}
						mask="+1 (000) 000-0000"
						placeholder="(768) 515-2803"
						{...form.getInputProps('phone')}
					/>
				</Group>
				<Group grow gap="lg">
					<TextInput
						mb="md"
						label="License Number"
						placeholder="10000001"
						{...form.getInputProps('licenseNumber')}
					/>
					<InputBase
						mb="md"
						label="Date of Birth"
						component={IMaskInput}
						mask="0000/00/00"
						placeholder="1968/02/20"
						{...form.getInputProps('dob')}
					/>
				</Group>
				<TextInput
					mb="md"
					label="Address 1"
					placeholder="14647 Maple Lane"
					{...form.getInputProps('address1')}
				/>
				<TextInput
					mb="md"
					label="Address 2"
					placeholder="Apt. 3"
					{...form.getInputProps('address2')}
				/>
				<Group wrap="nowrap" mb="xl">
					<TextInput
						label="City"
						placeholder="Georgetown"
						w="full"
						{...form.getInputProps('city')}
					/>
					<InputBase
						w={60}
						label="State"
						component={IMaskInput}
						mask="aa"
						placeholder="DE"
						prepareChar={(str) => str.toUpperCase()}
						{...form.getInputProps('state')}
					/>
					<InputBase
						w={160}
						label="ZipCode"
						component={IMaskInput}
						mask="00000"
						placeholder="61602"
						{...form.getInputProps('zip')}
					/>
				</Group>
				{hasError && (
					<Alert variant="light" color="red" title="API Error" onClose={resetError} withCloseButton>
						Unable to create a user at this time.
					</Alert>
				)}
				<Group justify="flex-end" mt="md">
					<Button type="submit" loading={isLoading}>
						Submit
					</Button>
				</Group>
			</form>
		</Box>
	)
}

interface NewGuestProps {
	closeModal(): void
}
