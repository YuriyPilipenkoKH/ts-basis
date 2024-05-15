import axios from "axios"


async function retrieveTotalPages() {
   const response = await axios.get(`http://localhost:4000/colors`)
   console.log('response',response.data.length)
   return response?.data.length 
}

export default retrieveTotalPages