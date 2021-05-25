import React from "react"
import {Route, Switch} from 'react-router-dom'
import { Menu, Main, AboutProducts} from '../components'
import './MainPage.css'

function MainPage() {

  return (
    <div className="main-block">
      <div className="left-block">
        <Menu
          onChange={(name) => alert(name)}
          items={
            [
              {
                label: 'О продуктах',
                path: '/about',
              }
            ]
          }/>
          <div>
            <h1><a href="http://esh.by">ESH.BY</a></h1>
            <span>@2021 Все права защищены</span>
          </div>
      </div>
      <div className="right-block">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/about">
            <AboutProducts/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default MainPage