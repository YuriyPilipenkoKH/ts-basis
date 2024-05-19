import axios from "axios"
import HeroTypes from "../models/HeroTypes";


const addSuperhero = async (hero: HeroTypes) => {
    return await axios.post(`http://localhost:4000/superheroes`, hero);
}

export default addSuperhero;