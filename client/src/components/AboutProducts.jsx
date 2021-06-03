import React, {useState} from "react"
import Axios from 'axios'

import { ProductsBlock_v2, SearchHeader } from './index'
import { Spinner } from "react-bootstrap";

function AboutProducts() {

  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    Axios.get('/api/users').then(({data}) => {
      setProducts(data)
      setIsLoading(false)
    })
  }, []);

  const [search, setSearch] = useState('')

  return (
    <div>
        <SearchHeader 
        onSearch = {setSearch}
        name={products.name}/>
        {isLoading ? (
        <div className="spinner-block">
          <Spinner animation="border" variant="light" />
          <span>Загрузка...</span>
        </div>) : (
      <div className="block-cards">
          {
            products.filter(category=>category.products.find(product=>product.name.toLowerCase().includes(search.toLowerCase())
              )).map((obj) => 
            <ProductsBlock_v2
              imgsrc = {obj.imgsrc}
              search = {search}
              title={obj.category}
              data={obj.products}
              setIsLoading={setIsLoading}/>
            )
          }
      </div>)}
    </div>
  )
}

export default AboutProducts
