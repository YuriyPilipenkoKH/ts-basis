import React from 'react'
import { useFriendsData } from '../../hooks/useFriendsData'
import { Link } from 'react-router-dom'
import FriendTypes from '../../models/FriendTypes'
import { useSuperHeroesData } from '../../hooks/useSuperHeroesData'
import { handleError, handleSuccess } from '../../lib/handlers'
import HeroTypes from '../../models/HeroTypes'

function ParallelQueriesPage() {

	const {
			data:friends,
			isLoading: isLoadingFriends,
			isError: isErrorFriends,
			isFetching:	isFetchingFriends,
			error: errorFriends,
		} = useFriendsData(handleSuccess, handleError )

	const {
			data:superheroes,
			isLoading: isLoadingSuperheroes,
			isError: isErrorSuperheroes,
			isFetching:	isFetchingSuperheroes,
			error: errorSuperheroes,
		} = useSuperHeroesData(handleSuccess, handleError )

	
		if (isLoadingFriends || isFetchingFriends || isLoadingSuperheroes || isFetchingSuperheroes) {
			return <h2>Loading....</h2>
		}
		if (isErrorFriends || isErrorSuperheroes ) {
			return <h2>{((errorFriends || errorSuperheroes) as Error).message}</h2>
		}

  return (
		<>
			<h1>ParallelQueriesPage</h1>
			<div>
			<h2>Friends</h2>
			{Array.isArray(friends?.data) &&
			friends?.data.map((friend:FriendTypes, idx:number) => (
					<div key={idx}>
					<Link
					to={`/reactQuery/friends/${friend.id}`}>
							{friend?.name}
					</Link>
					</div>
							))}
			</div>
			<div>
			<h2>Heroes</h2>
			{Array.isArray(superheroes?.data) &&
			superheroes?.data.map((hero:HeroTypes, idx:number) => (
					<div key={idx}>
					<Link
					to={`/reactQuery/super-heroes/${hero.id}`}>
							{hero?.name}
					</Link>
					</div>
							))}
			</div>
		</>
  )
}

export default ParallelQueriesPage
