import React from 'react'
import { useFriendsData } from '../../hooks/useFriendsData'
import { Link } from 'react-router-dom'
import FriendTypes from '../../models/FriendTypes'
import { useSuperHeroesData } from '../../hooks/useSuperHeroesData'
import { handleError, handleSuccess } from '../../lib/handlers'

function ParallelQueriesPage() {

    const {
        data:friends,
        isLoading,
        isError,
        isFetching,
        error,
      } = useFriendsData()

    const {
        data:superheroes,

      } = useSuperHeroesData(handleSuccess, handleError )

  return (
    <div>
       ParallelQueriesPage
       {Array.isArray(friends?.data) && 
        friends?.data.map((friend:FriendTypes, idx:number) => (
          <div key={idx}>
          <Link 
          to={`/reactQuery/parallel/${friend.id}`}>
              {friend?.name}
          </Link>
          </div>
      ))}
    </div>
  )
}

export default ParallelQueriesPage
