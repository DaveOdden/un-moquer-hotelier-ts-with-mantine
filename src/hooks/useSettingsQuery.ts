import { useQuery } from '@tanstack/react-query'
import { api, apiPaths } from 'src/api/api'

export const useSettings = () => {
	return useQuery({
		queryKey: ['settings'],
		queryFn: () =>
			api
				.request({
					method: 'GET',
					endpoint: apiPaths.settings,
				})
				.then((res) => res.message),
	})
}
