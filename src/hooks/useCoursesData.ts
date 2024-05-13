import { useQuery } from 'react-query'
import fetchCoursesByChannelId from '../lib/fetchCoursesByChannelId'


export const  useCoursesData = (channelId:string, onSuccess:any, onError:any) => {
   return useQuery (
   [ 'courses', channelId],
   () => fetchCoursesByChannelId(channelId),
    { 
      onSuccess,
      onError,
      enabled: !!channelId
    }
  )
}


