import { lazy } from 'react'

export const routeConfig = [
  {
    id: 'LoginPage',
    path: '/login',
    component: lazy(() => import('@pages/login/LoginPage')),
    isProtected: false,
  },
  {
    id: 'HomePage',
    path: '/',
    component: lazy(() => import('@pages/home/HomePage')),
    isProtected: true,
  },
]
