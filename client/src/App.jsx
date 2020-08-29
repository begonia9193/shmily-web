import React from 'react'
import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom'
import routes from '@/routes.js'

import NotFoundPage from '@/pages/404.jsx'
import Loading from '@/components/Loading.jsx'
import '@/less/index.less'

const App = () => {
  const isLogin = true
  return (
    <React.Suspense fallback={ <Loading /> }>
      <Router>
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key={ route.name }
                  path={ route.path }
                  exact={ route.exact }
                  render={ routeProp => {
                    if (route.children) {
                      return <route.component { ...routeProp } children={ route.children } />
                    } else {
                      return <route.component { ...routeProp } />
                    }
                  } } />
              )
            })
          }
          <Route component={ NotFoundPage } />
        </Switch>
        <Redirect to={ isLogin ? '/main' : '/login' } />
      </Router>
    </React.Suspense>
  )
}

export default App
