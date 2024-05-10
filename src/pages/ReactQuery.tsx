import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ReactQuery() {
  return (
    <div>
      <div>
        ReactQuery.tsx
      </div>
      <Link to="rqSupreheroes">RQ Super Heroes</Link>
			<Outlet />
    </div>
  )
}

export default ReactQuery

