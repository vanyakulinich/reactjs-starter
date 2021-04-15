import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import { MainPage, DashboardPage } from "./pages"

import { PAGES_ROUTES } from "./constants"

const App = () => {
  // add more routes here
  const routesListMap = [
    {
      path: PAGES_ROUTES.dashboard,
      Component: DashboardPage,
    },
    {
      path: PAGES_ROUTES.main,
      Component: MainPage,
    },
  ]

  return (
    <Suspense fallback="loading">
      <MainLayout>
        <Router>
          <Switch>
            {routesListMap.map(({ path, Component }) => (
              <Route key={path} path={path} exact>
                <Component />
              </Route>
            ))}
            <Route path="*">
              <Redirect to={PAGES_ROUTES.main} />
            </Route>
          </Switch>
        </Router>
      </MainLayout>
    </Suspense>
  )
}

export default App
