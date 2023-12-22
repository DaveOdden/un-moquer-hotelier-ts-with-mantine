const apiUrl = 'https://un-moquer-hotelier-api.vercel.app/api'
const apiKey = import.meta.env.VITE_VERCEL_API_KEY

const isRegularGetRequest = (config: ApiConfig) =>
	config.method === 'GET' && config.payload == undefined && config.id === undefined
const isGetRequestWithPayload = (config: ApiConfig) => config.method === 'GET' && config.payload
const prependQuestionMark = (string: string) => `?` + string.substring(1, string.length)

const dynamicallyAssembleQueryStringPartial = (payload: ApiPayload | undefined) => {
	let partialQueryString = ''
	if (payload) {
		Object.keys(payload).forEach(function (key: string) {
			partialQueryString += `&${key}=${payload[key as keyof ApiPayload]}`
		})
	}
	return partialQueryString
}

const assembleQueryString = (config: ApiConfig) => {
	let queryString = ''

	if (isRegularGetRequest(config)) return ''

	if (isGetRequestWithPayload(config))
		queryString += dynamicallyAssembleQueryStringPartial(config.payload)

	if (config.id) queryString += `&id=${config.id}`

	return prependQuestionMark(queryString)
}

export const api = {
	request: async (config: ApiConfig) => {
		let queryString = assembleQueryString(config)
		const response = await fetch(`${apiUrl}${config.endpoint}${queryString}`, {
			method: config.method,
			body: config.payload && config.method !== 'GET' ? JSON.stringify(config.payload) : null,
			headers: new Headers({
				Authorization: apiKey,
			}),
		})
		if (response.status === 200) return await response.json()
		return response
	},
}

export const apiPaths = {
	bookings: '/bookings',
	bookingsByRoom: '/bookingsByRoom',
	todaysBookings: '/bookingsOnToday',
	guests: '/guests',
	guest: '/getOneGuest',
	autocompleteGuests: '/getGuestsForAutocomplete',
	rooms: '/rooms',
	occupiedRooms: '/getCurrentlyOccupiedRooms',
	roomByAvailability: '/getRoomsByAvailability',
	settings: '/settings',
	checkin: '/checkIn',
	tasks: '/tasks',
}

interface ApiConfig {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	endpoint: string
	id?: string | number
	payload?: ApiPayload
}

interface ApiPayload {
	payload?: {
		[key: string | number]: any
	}
}
