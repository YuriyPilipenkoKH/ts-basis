import { useQuery } from 'react-query'
import fetchColors from '../lib/fetchColors'


export const  useColorsData = (pageNumber:number, onSuccess:any, onError:any) => {
   return useQuery (
    ['colors', pageNumber],
    () => fetchColors(pageNumber),
    { 
      onSuccess,
      onError,
    }
  )
}


