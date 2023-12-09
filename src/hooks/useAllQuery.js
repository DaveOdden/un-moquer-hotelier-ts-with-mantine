import { useQueries } from '@tanstack/react-query'
import { AppAPI } from 'src/api/API'
import { apiPaths } from 'src/api/constants'


export const useAllFeatures = () => {
  return useQueries({
    queries: [
      { 
        queryKey: ["guests"], 
        queryFn: () => AppAPI.call({
          method: 'GET',
          endpoint: apiPaths.guests
        }).then((res) => res.message) 
      }, { 
        queryKey: ["bookings"], 
        queryFn: () => AppAPI.call({
          method: 'GET',
          endpoint: apiPaths.bookings
        }).then((res) => res.message) 
      }, { 
        queryKey: ["rooms"], 
        queryFn: () => AppAPI.call({
          method: 'GET',
          endpoint: apiPaths.rooms
        }).then((res) => res.message) 
      },
    ]
  })
}