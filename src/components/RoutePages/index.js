import React from 'react'

import { Link } from 'react-router-dom'

import { PageList } from './styles'

export default function RoutePages() {
  const pages = ["1"]

  return(
    <PageList>
      {pages.map(page => (
        <li id={page}>
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
