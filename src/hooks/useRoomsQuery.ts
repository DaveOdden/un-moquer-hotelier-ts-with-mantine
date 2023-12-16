import { useQuery, useQueryClient } from '@tanstack/react-query'
import { api, apiPaths } from 'src/api/api'

export const useRoom = (id: number) => {
	const queryClient = useQueryClient()
	return queryClient.getQueryData<Array<any>>(['rooms'])?.find((d) => d._id === id)
}

export const useRooms = () => {
	return useQuery({
		queryKey: ['rooms'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.rooms,
				})
				.then((res) => res.message),
	})
}

export const useOccupiedRooms = () => {
	return useQuery({
		queryKey: ['occupiedrooms'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.occupiedRooms,
				})
				.then((res) => res.message),
	})
}
