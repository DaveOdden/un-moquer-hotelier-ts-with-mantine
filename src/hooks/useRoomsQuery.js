import { useQuery, useQueryClient } from '@tanstack/react-query'
import { AppAPI } from 'src/api/API'
import { apiPaths } from 'src/api/constants'


export const useRoom = (id) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(['rooms'])?.find((d) => d._id === id)
}

export const useRooms = () => {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: () => AppAPI.call({
      method: 'GET',
      endpoint: apiPaths.rooms
    }).then((res) => res.message),
  });
}

export const useOccupiedRooms = () => {
  return useQuery({
    queryKey: ['occupiedrooms'],
    queryFn: () => AppAPI.call({
      method: 'GET',
      endpoint: apiPaths.occupiedRooms
    }).then((res) => res.message),
  });
}