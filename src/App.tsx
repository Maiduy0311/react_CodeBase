import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PageNotFound from '@pages/not_found/PageNotFound'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

import { routeConfig } from './routes/routes'
import AppProvider from './contexts/AppProvider'

function App() {
  return (
    <AppProvider>
      <Routes>
        {routeConfig.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              route.isProtected ? (
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              ) : (
                <PublicRoute>
                  <route.component />
                </PublicRoute>
              )
            }
          />
        ))}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AppProvider>
  )
}

export default App
