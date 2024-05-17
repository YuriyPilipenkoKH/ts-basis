import  { MouseEventHandler } from 'react'; 

import HeroTypes from '../../models/HeroTypes';
import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../../hooks/useSuperHeroesData';
import { handleError, handleSuccess } from '../../lib/handlers';
import AddHeroForm from './AddHeroForm';


function RQSuperHeroesPage() {

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
      <AddHeroForm/>
     
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
