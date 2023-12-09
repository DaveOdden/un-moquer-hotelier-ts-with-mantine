import { TextInput, NumberInput, Button, Group, Box } from '@mantine/core'
import { useForm } from '@mantine/form'

export const NewGuest = () => {
	const form = useForm({
		initialValues: {
			firstName: '',
			email: '',
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	})

	return (
		<Box mx="auto">
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Group grow>
					<TextInput mb="md" label="First Name" placeholder="your@email.com" />
					<TextInput mb="md" label="Last Name" placeholder="your@email.com" />
				</Group>
				<Group grow>
					<TextInput
						mb="md"
						label="Email"
						placeholder="your@email.com"
						{...form.getInputProps('email')}
					/>
					<TextInput mb="md" label="Phone Number" placeholder="(768) 515-2803" />
				</Group>
				<Group grow>
					<TextInput mb="md" label="License Number" placeholder="10000001" />
					<TextInput mb="md" label="Date of Birth" placeholder="1968/02/20" />
				</Group>
				<TextInput mb="md" label="Street Address" placeholder="" />
				<Group grow wrap="nowrap" mb="xl">
					<TextInput label="City" placeholder="Albequirc" />
					<TextInput label="State" placeholder="UT" w={10} />
					<NumberInput label="Zip Code" placeholder="90210" min={10000} max={99999} />
				</Group>
				<Group justify="flex-end" mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</form>
		</Box>
	)
}
