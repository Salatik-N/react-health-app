import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from "./pages/Routes";

function App() {

  return (
    <Router>
      <div className="wrapper">
        <Routes isAuthenticated/>
      </div>
    </Router>
  )
}

export default App;