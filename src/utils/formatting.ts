import dayjs, { Dayjs } from 'dayjs'
import { HOURS_TILL_NO_SHOW } from 'src/utils/constants'

export const phoneFormat = (input: string) => {
	//returns (###) ###-####
	input = input.replace(/\D/g, '')
	var size = input.length
	if (size > 0) {
		input = '(' + input
	}
	if (size > 3) {
		input = input.slice(0, 4) + ') ' + input.slice(4, 11)
	}
	if (size > 6) {
		input = input.slice(0, 9) + '-' + input.slice(9)
	}
	return input
}

export const writtenOutDate = (date: Dayjs | string | Date) => {
	return dayjs(date).format('dddd - MMMM DD, YYYY')
}

export const writtenOutDateTime = (date: Dayjs | string | Date) => {
	return dayjs(date).format('ddd, MMM D, YYYY h:mm A')
}

export const formatToYMD = (date: Dayjs | string | Date) => {
	return dayjs(date).format('YYYY-MM-DD')
}

export const isFutureDate = (date1: Dayjs | string | Date, date2: Dayjs | string | Date) => {
	return dayjs(date1).isAfter(date2, 'day')
}

export const isSame = (date1: Dayjs | string | Date, date2: Dayjs | string | Date) => {
	return dayjs(date1).isSame(dayjs(date2))
}

export const guestIsLate = (date1: Dayjs | string | Date) => {
	dayjs(date1).isAfter(dayjs().add(HOURS_TILL_NO_SHOW, 'hour'))
}
