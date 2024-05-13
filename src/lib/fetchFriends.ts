import axios from "axios"


const fetchFriends =async () => {
    return await axios.get('http://localhost:4000/friends')
  }

  export default fetchFriends