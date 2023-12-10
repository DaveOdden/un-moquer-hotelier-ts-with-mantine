import { UseQueryResult } from '@tanstack/react-query'
import { IBooking, IGuest, IRoom } from 'src/utils/types'
import { writtenOutDateTime } from 'src/utils/formatting'

declare global {
	interface ObjectConstructor {
		typedKeys<T>(obj: T): Array<keyof T>
	}
}

Object.typedKeys = Object.keys as any

// REPLACE ANY WITH IBOOKING
export const findMatches = (record: any, searchQuery: string) => {
	return Object.typedKeys(record).some((k: keyof any) => {
		if (record && record[k]) {
			return (record[k] as string).toString().toLowerCase().includes(searchQuery.toLowerCase())
		}
	})
}

const findRoomsRecord = (_rooms: IRoom[], roomId: string | number) => {
	let selectedRecord: IRoom | {} = {}
	for (let x = 0; x < _rooms.length; x++) {
		if (roomId === _rooms[x]._id) {
			selectedRecord = _rooms[x]
			break
		}
	}
	return selectedRecord
}

const findGuestRecord = (_guests: IGuest[], guestId: string) => {
	let selectedRecord: IGuest | {} = {}
	for (let y = 0; y < _guests.length; y++) {
		if (guestId === _guests[y]._id) {
			_guests[y].fullName = _guests[y].firstName + ' ' + _guests[y].lastName
			selectedRecord = _guests[y]
			break
		}
	}
	return selectedRecord
}

export const getAdditionalDataForEachBooking = (
	guests: UseQueryResult<any, Error>,
	bookings: UseQueryResult<any, Error>,
	rooms: UseQueryResult<any, Error>
) => {
	let aggregatedBookings: Array<object> = []
	if ([guests, bookings, rooms].every((query) => query.isSuccess)) {
		bookings.data.map((booking: IBooking) => {
			aggregatedBookings.push({
				...booking,
				guest: findGuestRecord(guests.data, booking.guest._id),
				room: findRoomsRecord(rooms.data, booking.room._id),
				checkinDateReadable: writtenOutDateTime(booking.checkinDate),
				checkoutDateReadable: writtenOutDateTime(booking.checkoutDate),
			})
		})
	}
	return aggregatedBookings
}
