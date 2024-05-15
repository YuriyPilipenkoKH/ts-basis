import axios from 'axios'


async function fetchColors(perPage:number, pageNumber:number) {
  return await axios.get(`http://localhost:4000/colors?_limit=${perPage}&_page=${pageNumber}`)
}

export default fetchColors