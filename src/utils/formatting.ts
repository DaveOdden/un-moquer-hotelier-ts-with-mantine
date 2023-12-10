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
