
import { useQuery } from 'react-query'
import fetchFriends from '../lib/fetchFriends'


export const useFriendsData = () => {

    return useQuery (
      'friends', 
      fetchFriends,
    )
}


