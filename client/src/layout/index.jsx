import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SideLayout from './SideLayout.jsx'

const Home = React.lazy(() => import('@/pages/home/index.jsx'))
const Layout = props => {
  const { children, match } = props
  return (
    <div className="layout-wrapper">
      <SideLayout/>
      <div className="layout-main">
        <h2>布局容器</h2>
        <Switch>
          {
            children.map(route => {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  render={routeProp => {
                    if (route.children) {
                      return <route.component {...routeProp} children={route.children}/>
                    } else {
                      return <route.component {...routeProp} />
                    }
                  }}/>
              )
            })
          }
          <Redirect to='/main/home'/>
        </Switch>
      </div>
    </div>
  )
}

export default Layout
