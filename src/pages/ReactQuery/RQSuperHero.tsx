import React from 'react'
import { useSuperHeroData } from '../../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'

function RQSuperHeroPage() {
  const { heroId } = useParams<{ heroId: string }>();
  const id = heroId || "0"

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
    } = useSuperHeroData (id, handleSuccess, handleError )

    if (!heroId) {
      // Handle case where heroId is not provided in the URL
      return <div>No heroId provided</div>;
    }

    if (isLoading || isFetching) {
      return <h2>Loading....</h2>
    }
    if (isError) {
        return <h2>{(error as Error).message}</h2>
    }
    return (
      <div>
        <h1>SuperHero details</h1>
        {data?.data.alterEgo}
      </div>
    )
}

export default RQSuperHeroPage
