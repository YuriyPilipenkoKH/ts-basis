import axios from 'axios'
import { useQuery } from 'react-query'
import React, { MouseEventHandler } from 'react'; 

interface Hero {
    id: string
    name: string
    alterEgo: string
}
const fetchSuperheroes =() => {
  return  axios.get('http://localhost:4000/superheroes')
}

function RQSuperHeroesPage() {
    const {
      data,
      isLoading,
      isError,
      isFetching,
      error,
      refetch,
    } = useQuery(
      'superheroes', 
      fetchSuperheroes,
      { 
        cacheTime:240000 , 
        staleTime:30000 ,
        enabled:false ,  // stops fetching on mount
      }
    )
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
      refetch();
  };

    if (isLoading || isFetching) {
        return <h2>Loading....</h2>
    }
    if (isError) {
        return <h2>{(error as Error).message}</h2>
    }
  return (
    <>
        <h2>  RQ SuperHeroes  </h2>
        <button
        onClick={handleClick}> 
          Heroes 
        </button>
      {data?.data.map((hero:Hero, idx:number) => (
        <div key={idx}>
            {hero?.name}
        </div>
      ))}
    </>
  )
}

export default RQSuperHeroesPage
