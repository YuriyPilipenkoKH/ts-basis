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

  const handleSuccess = () => {
    console.log('Preform side effect after data fetching',data)
  }
  const handleError = () => {
    console.log('Preform side effect after encountering error',error)
  }
  const handleSelect = (data:any) => {
    const superheroNames = data?.data.map((hero:Hero) => hero.name )
    return superheroNames
  }
    const {
      data,
      isLoading,
      isError,
      isFetching,
      error,
      refetch,
    } = useQuery (
      'superheroes', 
      fetchSuperheroes,
      { 
        cacheTime:240000 , 
        staleTime:30000 ,
        // enabled:false ,  // stops fetching on mount
        onSuccess:handleSuccess,
        onError:handleError,
        select:handleSelect,
      }
    )
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
      refetch();
    }

    if (isLoading || isFetching) {
        return <h2>Loading....</h2>
    }
    if (isError) {
        return <h2>{(error as Error).message}</h2>
    }
  return (
    <>
        <h2> RQ SuperHeroes </h2>
        <button onClick={handleClick}>Heroes</button> {/* Use handleClick as event handler */}
        {/* Check if data is an array before mapping */}
        {/* {Array.isArray(data?.data) && 
        data?.data.map((hero:Hero, idx:number) => (
            <div key={idx}>
                {hero?.name}
            </div>
        ))} */}

        {data?.map((heroName:string, idx:number) => (
          <div key={idx}> {heroName} </div>
        ))}
    </>
  )
}

export default RQSuperHeroesPage
