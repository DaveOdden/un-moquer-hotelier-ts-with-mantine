import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { api, apiPaths } from 'src/api/api'

interface ApiPayload {
	[key: string | number]: any
}

type ResponseData = {
	message: Array<any>
}

export const useGuest = (id: string) => {
	const queryClient = useQueryClient()
	return queryClient.getQueryData<Array<any>>(['guests'])?.find((d: any) => d._id === id)
}

export const useGuests = () => {
	return useQuery({
		queryKey: ['guests'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.guests,
				})
				.then((res: ResponseData) => res.message),
	})
}

export const useGuestAutoComplete = () => {
	return useQuery({
		queryKey: ['guestsautocomplete'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.autocompleteGuests,
				})
				.then((res: ResponseData) => res.message),
	})
}

export const useCreateGuest = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (newGuest: ApiPayload) => {
			return api.request({
				method: 'POST',
				endpoint: apiPaths.guests,
				payload: newGuest,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['guests'] })
		},
	})
}

export const useUpdateGuest = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: any) => {
			return api.request({
				method: 'PUT',
				endpoint: apiPaths.guests,
				id: data.id,
				payload: data.payload,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['guests'] })
		},
	})
}

export const useDeleteGuest = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: string) => {
			return api.request({
				method: 'DELETE',
				endpoint: apiPaths.guests,
				id: id,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['guests'] })
		},
	})
}
