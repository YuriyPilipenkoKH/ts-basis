import { useQuery } from 'react-query'
import fetchFriend from '../lib/fetchFriend';


export const useFriendData = (friendId:string, onSuccess:any, onError:any) => {

	return useQuery(
		['friends', friendId], 
		() => fetchFriend(friendId), 
		{
				onSuccess,
				onError,
		}
);
}

