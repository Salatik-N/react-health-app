import React, {useState} from "react"

import { ProductsBlock_v2, SearchHeader } from './index'

function AboutProducts({items}) {

  const [search, setSearch] = useState('')

  return (
    <div>
        <SearchHeader 
        onSearch = {setSearch}
        name={items.name}/>
      <div className="block-cards">
          {
            items.filter(category=>category.products.find(product=>product.name.toLowerCase().includes(search.toLowerCase())
              )).map((obj) => 
            <ProductsBlock_v2
              imgsrc = {obj.imgsrc}
              search = {search}
              title={obj.category}
              data={obj.products}/>
            )
          }
      </div>
    </div>
  )
}

export default AboutProducts