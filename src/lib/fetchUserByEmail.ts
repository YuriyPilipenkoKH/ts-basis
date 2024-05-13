import axios from 'axios'


async function fetchUserByEmail(email:string) {
  return await axios.get(`http://localhost:4000/users/${email}`)
}

export default fetchUserByEmail
