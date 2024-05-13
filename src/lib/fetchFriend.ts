import axios from "axios"


const fetchFriend =async (friendId: string) => {
    return await axios.get(`http://localhost:4000/friends${friendId}`)
  }

  export default fetchFriend