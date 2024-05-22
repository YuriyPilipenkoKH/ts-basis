import axios from "axios"
// import { request } from "../utils/axios-utils"


const fetchSuperheroes =async () => {
    // 1 var
    return await axios.get('http://localhost:4000/superheroes')
    // 2 var
    // return request({url: '/superheroes'})
  }

  export default fetchSuperheroes