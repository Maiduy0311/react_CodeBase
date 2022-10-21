import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '@apps/hooks'

function PublicRoute({ children }: { children: JSX.Element }) {
  const { access_token } = useAppSelector((state) => state.auth)

  if (access_token) {
    return <Navigate to="/" />
  }

  return (
    <Suspense fallback={null}>
      <main className="main-content">{children}</main>
    </Suspense>
  )
}

export default PublicRoute
