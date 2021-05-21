import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {MainPage, StartPage} from './index'

export const Routes = isAuthenticated => {

  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    )
  }

  return (
      <StartPage/>
  )
}