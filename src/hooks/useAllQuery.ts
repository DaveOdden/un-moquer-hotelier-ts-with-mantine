import { useQueries } from '@tanstack/react-query'
import { api, apiPaths } from 'src/api/api'

export const useAllFeatures = () => {
	return useQueries({
		queries: [
			{
				queryKey: ['guests'],
				queryFn: () =>
					api
						.request({
							method: 'GET',
							endpoint: apiPaths.guests,
						})
						.then((res) => res.message),
			},
			{
				queryKey: ['bookings'],
				queryFn: () =>
					api
						.request({
							method: 'GET',
							endpoint: apiPaths.bookings,
						})
						.then((res) => res.message),
			},
			{
				queryKey: ['rooms'],
				queryFn: () =>
					api
						.request({
							method: 'GET',
							endpoint: apiPaths.rooms,
						})
						.then((res) => res.message),
			},
		],
	})
}
