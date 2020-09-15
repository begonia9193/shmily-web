import React from 'react'
const lazyLoad = component => React.lazy(() => component)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: lazyLoad(import('@/layout/index')),
    redirect: '/main/home',
    children: [
      {
        name: 'home',
        path: '/main/home',
        component: lazyLoad(import('@/pages/home/index')),
        exact: true
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: lazyLoad(import('@/pages/login/index')),
    exact: true
  }
]



export default routes