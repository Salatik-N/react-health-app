import React, {useState} from "react";
import {Link} from "react-router-dom";

const PATHS_INDEX = {
  ["/main"]:null,
  ["/about"]:0,
}

function Menu({items}) {

  const [activeItem, setActiveItem] = useState(PATHS_INDEX[window.location.pathname])
  
  const onActivePage = (index) => {
    setActiveItem(index);
  }

  return (
    <div className="menu-block">
      <Link to="/main">
      <div
        className={activeItem === null ? 'menu-item active' : 'menu-item'}
        onClick={() => onActivePage(null)}>
        Главная
      </div>
      </Link>
      {items.map((component, index) =>
        <Link to={component.path}>
          <div
            className={activeItem === index ? 'menu-item active' : 'menu-item'}
            onClick={() => onActivePage(index)}
            key={`${component.label}_${index}`}>
              {component.label}
          </div>
        </Link>)}
    </div>
  )
}

export default Menu