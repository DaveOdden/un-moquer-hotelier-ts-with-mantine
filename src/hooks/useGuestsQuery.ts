import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { IResponse, ApiPayload, IGuest } from 'src/utils/types'
import { api, apiPaths } from 'src/api/api'

export const useGuest = (id: string) => {
	const queryClient = useQueryClient()
	return queryClient.getQueryData<Array<IGuest>>(['guests'])?.find((d: IGuest) => d._id === id)
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
				.then((res: IResponse) => res.message),
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
				.then((res: IResponse) => res.message),
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
		mutationFn: (data: { id: string; payload: ApiPayload }) => {
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
