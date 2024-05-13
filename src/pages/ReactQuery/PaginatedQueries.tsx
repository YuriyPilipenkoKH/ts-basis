import { Link } from "react-router-dom"
import { useColorsData } from "../../hooks/useColorsData"
import { handleError, handleSuccess } from "../../lib/handlers"
import ColorTypes from "../../models/ColorTypes"


function PaginatedQueriesPage() {
	const {
			data :colors,
			isLoading,
			isError,
			isFetching,
			error,

		} = useColorsData (handleSuccess, handleError )
		if (isLoading || isFetching) {
			return <h2>Loading....</h2>
	}
	if (isError) {
			return <h2>{(error as Error).message}</h2>
	}
  return (
	<>
			<div>PaginatedQueriesPage</div>
			<h2> RQ SuperHeroes </h2>
		
			{Array.isArray(colors?.data) && 
			colors?.data.map((color:ColorTypes, idx:number) => (
					<div key={idx}>
					<Link 
					to={`/reactQuery/colors/${color?.id}`}>
							{color?.label}
					</Link>
					</div>
			))}
	</>
  )
}

export default PaginatedQueriesPage
