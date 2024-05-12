import  { MouseEventHandler } from 'react'; 
import { useSuperHeroesData } from '../../hooks/useSupreHeroesData';


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
        <button onClick={handleClick}>Heroes</button> {/* Use handleClick as event handler */}
        {/* Check if data is an array before mapping */}
        {/* {Array.isArray(data?.data) && 
        data?.data.map((hero:HeroTypes, idx:number) => (
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
