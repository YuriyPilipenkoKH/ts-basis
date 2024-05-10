import axios from 'axios'
import { useQuery } from 'react-query'

interface Hero {
    id: string
    name: string
    alterEgo:string
}
const fetchSuperheroes =() => {
  return  axios.get('http://localhost:4000/superheroes')
}

function RQSuperHeroesPage() {
    const {
      data,
      isLoading,
      isError,
      error,
    } = useQuery('superheroes', fetchSuperheroes)

    if (isLoading) {
        return <h2>Loading....</h2>
    }
    if (isError) {
        return <h2>{(error as Error).message}</h2>
    }
  return (
    <>
        <h2>
        RQ SuperHeroes
        </h2>
      {data?.data.map((hero:Hero, idx:number) => (
        <div key={idx}>
            {hero?.name}
        </div>
      ))}
    </>
  )
}

export default RQSuperHeroesPage
