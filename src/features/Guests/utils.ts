import { IGuest, IGuestAddress } from '../../utils/types'
import { formatToYMD, isFutureDate } from 'src/utils/formatting'

declare global {
	interface ObjectConstructor {
		typedKeys<T>(obj: T): Array<keyof T>
	}
}

Object.typedKeys = Object.keys as any

export const findMatches = (record: IGuest, searchQuery: string) => {
	return Object.typedKeys(record).some((k: keyof IGuest) => {
		// search first level properties
		if (record && record[k]) {
			return (record[k] as string).toString().toLowerCase().includes(searchQuery.toLowerCase())
		}

		// search in address
		if (record[k] instanceof Object && k === 'address') {
			if (record !== undefined && record.address !== undefined) {
				return Object.typedKeys(record.address).some((subKey: keyof IGuestAddress) => {
					return record?.address
						? record?.address[subKey].toString().toLowerCase().includes(searchQuery.toLowerCase())
						: false
				})
			}
		}
	})
}

export const findMatchesByKey = (record: IGuest, filterOption: string) => {
	const datesOfStay = record?.datesOfStay
	if ((filterOption === 'occupants' || filterOption === 'upcoming') && datesOfStay === undefined)
		return false
	let todaysDate = formatToYMD(new Date())

	console.log('')
	console.log('findMatchesByKey')
	console.log(record)
	console.log(todaysDate)
	console.log(datesOfStay?.includes(todaysDate))

	switch (filterOption) {
		case 'occupants':
			return datesOfStay?.includes(todaysDate)
		case 'upcoming':
			return (
				!datesOfStay?.includes(todaysDate) &&
				datesOfStay?.some((element) => isFutureDate(element, todaysDate))
			)
		case 'members':
			return record.member
		case 'banned':
			return record.status === 'banned'
	}
}

export const convertFormDataForAPI = (formData: any) => {
	return {
		firstName: formData.firstName,
		lastName: formData.lastName,
		phone: formData.phone,
		email: formData.email,
		dob: formData.dob,
		licenseNumber: formData.licenseNumber,
		address: {
			address1: formData.address1,
			address2: formData.address2,
			city: formData.city,
			state: formData.state,
			zip: formData.zip,
		},
		currentlyAssignedRoom: '',
		status: 'good',
		storedCreditCard: {},
		history: [],
		signUpDate: new Date(),
	}
}
