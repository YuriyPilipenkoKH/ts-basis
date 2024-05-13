import  { MouseEventHandler } from 'react'; 

import HeroTypes from '../../models/HeroTypes';
import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../../hooks/useSuperHeroesData';


function RQSuperHeroesPage() {

  const handleSuccess = () => {
    console.log('Preform side effect after data fetching',data)
  }
  const handleError = () => {
    console.log('Preform side effect after encountering error',error)
  }

    const {
      data,
      isLoading,
      isError,
      isFetching,
      error,
      refetch,
    } = useSuperHeroesData (handleSuccess, handleError )

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
      <button onClick={handleClick}>Heroes</button>
     
      {Array.isArray(data?.data) && 
      data?.data.map((hero:HeroTypes, idx:number) => (
          <div key={idx}>
          <Link 
          to={`/reactQuery/super-heroes/${hero.id}`}>
              {hero?.name}
          </Link>
          </div>
      ))}

      {/* {data?.map((heroName:string, idx:number) => (
        <div key={idx}> {heroName} </div>
      ))} */}
    </>
  )
}

export default RQSuperHeroesPage
