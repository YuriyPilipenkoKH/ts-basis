import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function ReactQuery() {
	const location = useLocation();

  return (
    <>
		{location.pathname === '/reactQuery' && (
      <>
				<div>
					ReactQuery.tsx
				</div>
				<Link to="rqSupreheroes">RQ Super Heroes</Link>
			</>

		)}
			{location.pathname === '/reactQuery/rqSupreheroes' && (

			<Outlet />
			)}
    </>
  )
}

export default ReactQuery

