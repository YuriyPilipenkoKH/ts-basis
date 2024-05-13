import axios from "axios"


const fetchSuperheroes =async () => {
    return await axios.get('http://localhost:4000/superheroes')
  }

  export default fetchSuperheroes