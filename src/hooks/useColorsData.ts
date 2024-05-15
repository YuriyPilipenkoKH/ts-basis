import { useQuery } from 'react-query'
import fetchColors from '../lib/fetchColors'


export const  useColorsData = (perPage:number,pageNumber:number, onSuccess:any, onError:any) => {
   return useQuery (
    ['colors', pageNumber],
    () => fetchColors(perPage,pageNumber),
    { 
      onSuccess,
      onError,
    }
  )
}


