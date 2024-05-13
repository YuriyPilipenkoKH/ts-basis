
import { useQuery } from 'react-query'
import fetchFriends from '../lib/fetchFriends'


export const useFriendsData = ( onSuccess:any, onError:any) => {

    return useQuery (
      'friends', 
      fetchFriends,
      {
        onSuccess,
        onError,
    }
    )
}


