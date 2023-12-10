import dayjs, { Dayjs } from 'dayjs'

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

export const writtenOutDate = (date: Dayjs | string) => {
	return dayjs(date).format('dddd - MMMM DD, YYYY')
}

export const writtenOutDateTime = (date: Dayjs | string) => {
	return dayjs(date).format('ddd, MMM D, YYYY h:mm A')
}