import { useSuperHeroData } from '../../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'
import { handleError, handleSuccess } from '../../lib/handlers';


function RQSuperHeroPage() {
  const { heroId } = useParams();
  const id = heroId || "0"

    const {
      data,
      isLoading,
      isError,
      isFetching,
      error,
    } = useSuperHeroData (id, handleSuccess, handleError )

    if (!heroId) {
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
        <div>{data?.data.name} — {data?.data.alterEgo}</div>
      </div>
    )
}

export default RQSuperHeroPage
