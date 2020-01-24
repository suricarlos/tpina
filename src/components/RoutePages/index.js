import React from 'react'

import { Link } from 'react-router-dom'

import { PageList } from './styles'

export default function RoutePages() {
  const pages = [1, 2, 3]

  return(
    <PageList>
      {pages.map(page => (
        <li key={page.toString()}>
          <Link to={`/${page}`} >
            <button type="button">
              <span>{page}</span>
            </button>
          </Link>
        </li>
      ))}
    </PageList>
  )
}
