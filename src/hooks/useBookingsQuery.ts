import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { api, apiPaths } from 'src/api/api'

interface ApiPayload {
	[key: string | number]: any
}

export const useBooking = (id: string) => {
	const queryClient = useQueryClient()
	return queryClient.getQueryData<Array<any>>(['bookings'])?.find((d: any) => d._id === id)
}

export const useBookings = () => {
	return useQuery({
		queryKey: ['bookings'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.bookings,
				})
				.then((res) => res.message),
	})
}

export const useTodaysBookings = (dateObj: object) => {
	return useQuery({
		queryKey: ['todaysbookings'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.todaysBookings,
					payload: dateObj,
				})
				.then((res) => res.message),
	})
}

export const useArrayOfRoomsBooked = () => {
	return useQuery({
		queryKey: ['roomsbooked'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.bookings,
				})
				.then((res) => res.arrayOfRoomsBooked),
	})
}

export const useCreateBooking = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (newBooking: ApiPayload) => {
			return api.request({
				method: 'POST',
				endpoint: apiPaths.bookings,
				payload: newBooking,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['bookings'] })
		},
	})
}

export const useUpdateBooking = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: ApiPayload) => {
			return api.request({
				method: 'PUT',
				endpoint: apiPaths.bookings,
				id: data.id,
				payload: data.payload,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['bookings'] })
		},
	})
}

export const useDeleteBooking = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: string) => {
			return api.request({
				method: 'DELETE',
				endpoint: apiPaths.bookings,
				id: id,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['bookings'] })
		},
	})
}

export const useCheckIn = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: ApiPayload) => {
			return api.request({
				method: 'PUT',
				endpoint: apiPaths.checkin,
				id: data.id,
				payload: data,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['todaysbookings'] })
		},
	})
}
