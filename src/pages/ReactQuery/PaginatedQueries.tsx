import { Link } from "react-router-dom"
import { useColorsData } from "../../hooks/useColorsData"
import { handleError, handleSuccess } from "../../lib/handlers"
import ColorTypes from "../../models/ColorTypes"
import { useState } from "react"



 function PaginatedQueriesPage () {
	const [pageNumber, setPageNumber] = useState<number>(1)
	const perPage = 2
  // const totalPages = await retrieveTotalPages()

	const {
			data :colors,
			isLoading,
			isError,
			isFetching,
			error,

		} = useColorsData (perPage, pageNumber, handleSuccess, handleError )

		console.log('colors',colors?.data,)

		// if (Array.isArray(colors?.data)) {
		// 	totalPages =  Math.ceil((colors?.data ?? []).length / perPage);
		// 	console.log(totalPages)
		// }

		if (isLoading || isFetching) {
			return <h2>Loading....</h2>
		}
		if (isError) {
				return <h2>{(error as Error).message}</h2>
		}
  return (
	<>
			<div>PaginatedQueriesPage</div>
			<h2> RQ Colors </h2>
		
			{Array.isArray(colors?.data) && 
			colors?.data.map((color:ColorTypes, idx:number) => (
					<div key={idx}>
					<Link 
					to={`/reactQuery/colors/${color?.id}`}>
							{color?.label}
					</Link>
					</div>
			))}
			<div style={{display:'flex', gap: '1rem'}}>
				<button
					onClick={()=> setPageNumber(page => page - 1)}
					disabled={pageNumber === 1}  >
					prev
				</button>
				<button
					onClick={()=> setPageNumber(page => page + 1)}
					disabled={pageNumber === 4}  >
					next
				</button>
			</div>
	</>
  )
}

export default PaginatedQueriesPage
