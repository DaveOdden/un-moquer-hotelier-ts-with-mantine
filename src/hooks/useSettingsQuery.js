import { useQuery } from '@tanstack/react-query'
import { AppAPI } from 'src/api/API'
import { apiPaths } from 'src/api/constants'

export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: () => AppAPI.call({
      method: 'GET',
      endpoint: apiPaths.settings
    }).then((res) => res.message),
  });
}