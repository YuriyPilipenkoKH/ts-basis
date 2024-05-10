import axios from 'axios'
import { useQuery } from 'react-query'

interface Hero {
    id: string
    name: string
    alterEgo:string
}

function RQSuperHeroesPage() {
    const {data,  isLoading} = useQuery('superheroes',() => {
      return  axios.get('http://localhost:4000/superheroes')
    })

    if (isLoading) {
        return <h2>Loading....</h2>
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
