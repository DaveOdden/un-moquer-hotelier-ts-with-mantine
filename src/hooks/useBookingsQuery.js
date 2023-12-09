import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { AppAPI } from 'src/api/API'
import { apiPaths } from 'src/api/constants'

export const useBooking = (id) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(['bookings'])?.find((d) => d._id === id)
}

export const useBookings = () => {
  return useQuery({
    queryKey: ['bookings'],
    queryFn: () => AppAPI.call({
      method: 'GET',
      endpoint: apiPaths.bookings
    }).then((res) => res.message),
  });
}

export const useArrayOfRoomsBooked = () => {
  return useQuery({
    queryKey: ['roomsbooked'],
    queryFn: () => AppAPI.call({
      method: 'GET',
      endpoint: apiPaths.bookings
    }).then((res) => res.arrayOfRoomsBooked),
  });
}

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newBooking) => {
      return AppAPI.call({
        method: 'POST',
        endpoint: apiPaths.bookings,
        payload: newBooking
      })
    },
    onSettled: async (data, error, variables, context) => {
      queryClient.invalidateQueries(["bookings"]);
    },
  })
}

export const useUpdateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      return AppAPI.call({
        method: 'PUT',
        endpoint: apiPaths.bookings,
        id: data.id, 
        payload: data.payload
      })
    },
    onSettled: async (data, error, variables, context) => {
      queryClient.invalidateQueries(["bookings"]);
    },
  })
}

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => {
      return AppAPI.call({
        method: 'DELETE',
        endpoint: apiPaths.bookings,
        id: id
      })
    },
    onSettled: async (data, error, variables, context) => {
      queryClient.invalidateQueries(["bookings"]);
    },
  })
}