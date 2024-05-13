import axios from "axios"


const fetchSuperhero = async (heroId: string) => {
    return await axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export default fetchSuperhero;