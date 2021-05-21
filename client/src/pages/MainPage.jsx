import React from "react"
import Axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import {UserInfo, Menu, Main, AboutProducts} from '../components'
import './MainPage.css'

function MainPage() {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    Axios.get('http://localhost:3000/db.json').then(({data}) => {
      setProducts(data)
    })
  }, []);

  return (
    <div className="main-block">
      <div className="left-block">
        {/*<UserInfo/>*/}
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
          <Route path="/main">
            <Main/>
          </Route>
          <Route path="/about">
            <AboutProducts items={products}/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default MainPage