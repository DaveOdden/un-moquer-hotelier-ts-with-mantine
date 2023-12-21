import { Dayjs } from 'dayjs'

interface IObjectId {
	_id: string
}

export interface IAggregatedBooking {
	_id: string
	guest: IGuest
	room: IRoom
	checkinDate: string
	checkoutDate: string
	paid: true
	billing: {
		rate: number
		days: number
		additional: number
	}
	wakeUpCalls?: IWakeUpCall[]
	checkinDateReadable?: string
	checkoutDateReadable?: string
	checkedIn: boolean
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
	wakeUpCalls?: IWakeUpCall[]
	checkedIn: boolean
}

interface IWakeUpCall {
	time: string
	dates: string[]
	notes: string
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
	datesOfStay?: string[]
	member?: boolean
	memberInfo?: IMemberInfo
}

export interface IMemberInfo {
	memberSince?: string
	tier?: string
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

export interface IHistory {
	id: string
	category: string
	action: string
	data?: any
	by: string
	date?: string | Date | Dayjs
}

export interface ITask {
	_id: string
	title: string
	note: string
	isCompleted: boolean
	dateAdded: string
	dateDue: string
	assignedTo: string
	createdBy: string
	lastUpdated?: string
}

export interface ApiPayload {
	[key: string | number]: any
}

export type IResponse = {
	message: Array<any>
}
