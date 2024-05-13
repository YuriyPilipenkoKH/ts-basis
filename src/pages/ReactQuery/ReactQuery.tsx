import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function ReactQuery() {
	const location = useLocation();
	console.log(location)
  return (
    <>
		{location.pathname === '/reactQuery' && (
      <>
			<h1>
				ReactQuery
			</h1>
			<Link to="super-heroes">RQ Super Heroes</Link>
		</>
		)}
			<Outlet />
    </>
  )
}

export default ReactQuery

