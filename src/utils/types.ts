interface IObjectId {
	_id: string
}

export interface IBooking {
	_id: string
	guest: IObjectId
	room: IObjectId
	checkinDate: string
	checkoutDate: string
	paid: true
	billing: {
		rate: number
		days: number
		additional: number
	}
}

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
	fullName?: string
}

export interface IGuestAddress {
	street: string
	city: string
	state: string
	zip: string
}

export interface IRoom {
	_id: number
	roomNum: number
	status: {
		occupied: boolean
		needsCleaning: boolean
	}
	datesBooked: string[]
}
