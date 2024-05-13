import { useQuery } from 'react-query'
import fetchColors from '../lib/fetchColors'


export const  useColorsData = ( onSuccess:any, onError:any) => {
   return useQuery (
    'courses',
    fetchColors,
    { 
      onSuccess,
      onError,
    }
  )
}


