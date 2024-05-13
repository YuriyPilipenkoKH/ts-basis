import React from 'react'
import { useUserData } from '../../hooks/useUserData'
import { handleError, handleSuccess } from '../../lib/handlers'
import { useCoursesData } from '../../hooks/useCoursesData'
import { Link } from 'react-router-dom'

interface DependentQueriesPageProps {
    email:string
}

function DependentQueriesPage({email} : DependentQueriesPageProps) {
    const {
        data:user,
        isLoading,
        isError,
        isFetching,
        error,
    } = useUserData (email, handleSuccess, handleError )
    const channelId = user?.data.channelId
    const {
        data:courses,

    } = useCoursesData (channelId, handleSuccess, handleError )
    console.log(courses?.data.courses)

    if (isLoading || isFetching) {
        return <h2>Loading....</h2>
    }
    if (isError) {
            return <h2>{(error as Error).message}</h2>
    }
  return (
    <div>
      <h1>DependentQueriesPage</h1>
      <h2>Courses</h2>
			{Array.isArray(courses?.data.courses) &&
			courses?.data.courses.map((course:string, idx:number) => (
					<div key={idx}>
						<Link
						to={`/reactQuery/dependent/${idx}`}>
								{course}
						</Link>
					</div>
            ))}
    </div>
  )
}

export default DependentQueriesPage
