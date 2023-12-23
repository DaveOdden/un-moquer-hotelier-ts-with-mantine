import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { api, apiPaths } from 'src/api/api'

const QUERY_KEY = 'alerts'

interface ApiPayload {
	[key: string | number]: any
}

export const useAlert = (id: number) => {
	const queryClient = useQueryClient()
	return queryClient.getQueryData<Array<any>>([QUERY_KEY])?.find((d) => d._id === id)
}

export const useAlerts = () => {
	return useQuery({
		queryKey: [QUERY_KEY],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.alerts,
				})
				.then((res) => res.message),
	})
}

export const useCreateAlert = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (newAlert: ApiPayload) => {
			return api.request({
				method: 'POST',
				endpoint: apiPaths.alerts,
				payload: newAlert,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})
}

export const useUpdateTask = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (updatedAlert: any) => {
			return api.request({
				method: 'PUT',
				endpoint: apiPaths.alerts,
				id: updatedAlert.id,
				payload: updatedAlert,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})
}

export const useDeleteTask = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: string) => {
			return api.request({
				method: 'DELETE',
				endpoint: apiPaths.alerts,
				id: id,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})
}
