import React,{ useState, useEffect } from "react"

import { ProductsBlock } from './index'

function ProductsBlock_v2({title, data, search, imgsrc}) {

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
       if(search.length)setIsOpen(true)
    }, [search])

  return (
    <div 
    className={isOpen === false ? "category-block" : "category-block w-100"}>
        <div className="category-title"
        onClick = {() => setIsOpen(!isOpen)}>
          <img src={imgsrc} alt={title}/>
          <h2>{title}</h2>
          <a className={isOpen === false ? "d-none": "h6 w-20 m-auto text-muted"}
          onClick = {() => setIsOpen(!isOpen)}>
            Нажмите, чтобы свернуть
          </a>
        </div>
        <div className="row">
        {
          isOpen && 
          data.filter(product=>product.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
          <ProductsBlock 
          key = {product.id}
          {...product}/>))
        }</div>
    </div>
  )
}

export default ProductsBlock_v2