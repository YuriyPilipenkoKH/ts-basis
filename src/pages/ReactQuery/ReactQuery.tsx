
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
			<div style={{display:'grid'}}>
				<Link to="super-heroes">RQ Super Heroes</Link>
				<Link to="parallel">RQ Parallel queries</Link>
				<Link to="dependent">RQ Dependent queries</Link>
			</div>
		</>
		)}
			<Outlet />
    </>
  )
}

export default ReactQuery

