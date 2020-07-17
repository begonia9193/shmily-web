import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFoundPage from '@/pages/404.jsx'
import Loading from '@/components/Loading.jsx'

// 懒加载
const Home = React.lazy(() => import('@/pages/home/Index.jsx'))

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route path='/home' component={Home} />
      </Switch>
    </React.Suspense>
  )
}

export default App
