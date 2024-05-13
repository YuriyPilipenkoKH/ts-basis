import axios from 'axios'


async function fetchColors() {
  return await axios.get(`http://localhost:4000/colors`)
}

export default fetchColors