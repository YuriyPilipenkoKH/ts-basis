import axios from 'axios'


async function fetchColors(pageNumber:number) {
  return await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

export default fetchColors