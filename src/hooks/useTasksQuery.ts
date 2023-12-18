import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { api, apiPaths } from 'src/api/api'

interface ApiPayload {
	[key: string | number]: any
}

export const useTask = (id: number) => {
	const queryClient = useQueryClient()
	return queryClient.getQueryData<Array<any>>(['tasks'])?.find((d) => d._id === id)
}

export const useTasks = () => {
	return useQuery({
		queryKey: ['tasks'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.tasks,
				})
				.then((res) => res.message),
	})
}

export const useCreateTask = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (newTask: ApiPayload) => {
			return api.request({
				method: 'POST',
				endpoint: apiPaths.tasks,
				payload: newTask,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
	})
}

export const useUpdateTask = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (updatedTask: any) => {
			return api.request({
				method: 'PUT',
				endpoint: apiPaths.tasks,
				id: updatedTask.id,
				payload: updatedTask,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
	})
}

export const useDeleteTask = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: string) => {
			return api.request({
				method: 'DELETE',
				endpoint: apiPaths.tasks,
				id: id,
			})
		},
		onSettled: async () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
	})
}
