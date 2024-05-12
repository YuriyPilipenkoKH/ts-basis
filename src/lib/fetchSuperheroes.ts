import axios from "axios"


const fetchSuperheroes =() => {
    return  axios.get('http://localhost:4000/superheroes')
  }

  export default fetchSuperheroes