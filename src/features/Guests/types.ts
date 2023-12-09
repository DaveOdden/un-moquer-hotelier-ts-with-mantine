export interface IGuest {
	_id?: string
	firstName?: string
	lastName?: string
	address?: IGuestAddress
	email?: string
	dob?: string
	currentlyAssignedRoom?: string | number
	history?: [object]
	licenseNumber?: string
	phone?: string
	signUpDate?: string
	status?: string
	storedCreditCard?: [object]
}

export interface IGuestAddress {
	street: string
	city: string
	state: string
	zip: string
}
