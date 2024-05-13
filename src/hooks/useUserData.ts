import { useQuery } from 'react-query'
import fetchUserByEmail from '../lib/fetchUserByEmail'

export const  useUserData = (email:string, onSuccess:any, onError:any) => {
   return useQuery (
   [ 'user', email],
   () => fetchUserByEmail(email),
    { 
      onSuccess,
      onError,
    }
  )
}


