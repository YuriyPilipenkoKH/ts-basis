import React from 'react'
import { useParams } from 'react-router-dom';
import { useFriendData } from '../../hooks/useFriendData';
import { handleError, handleSuccess } from '../../lib/handlers';

function RQFriendPage() {
  const { friendId } = useParams();
  const id = friendId || "0"
  const {
    data,
    isLoading,
    isError,
    isFetching,
    error,
  } = useFriendData (id, handleSuccess, handleError )

  if (!friendId ) {
    return <div>No id provided</div>;
  }

  if (isLoading || isFetching) {
    return <h2>Loading....</h2>
  }
  if (isError) {
      return <h2>{(error as Error).message}</h2>
  }

  return (
    <div>
      <h1>Friend details</h1>
      <div>Name — {data?.data.name} </div>
    </div>
  )
}

export default RQFriendPage
