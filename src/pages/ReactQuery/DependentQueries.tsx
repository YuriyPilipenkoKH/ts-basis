import React from 'react'
import { useUserData } from '../../hooks/useUserData'
import { handleError, handleSuccess } from '../../lib/handlers'
import { useCoursesData } from '../../hooks/useCoursesData'

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
      DependentQueriesPage
    </div>
  )
}

export default DependentQueriesPage
