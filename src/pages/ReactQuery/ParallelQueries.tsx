import React from 'react'
import { useFriendsData } from '../../hooks/useFriendsData'
import { Link } from 'react-router-dom'
import FriendTypes from '../../models/FriendTypes'

function ParallelQueriesPage() {
    const {
        data,
        isLoading,
        isError,
        isFetching,
        error,
      } = useFriendsData()

  return (
    <div>
       ParallelQueriesPage
       {Array.isArray(data?.data) && 
        data?.data.map((friend:FriendTypes, idx:number) => (
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
