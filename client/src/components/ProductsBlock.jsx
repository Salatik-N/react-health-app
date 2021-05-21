import React, {useState, useEffect} from "react"

import fatsImg from '../assets/trans-fat.png'
import caloriesImg from '../assets/calories.png'
import carbohydratesImg from '../assets/wheat.png'
import proteinsImg from '../assets/molecule.png'

function ProductsBlock({name, ckal, proteins, fats, carbohydrates}) {

    const [isOpenProduct, setIsOpenProduct] = useState(false);

  return (
      <div className={isOpenProduct === false ? "row products-block" : "row products-block w-100"}>
        <div className={isOpenProduct === false ? "products-info" : "products-info w-50"}>
            <div className="products-block__title">
                <h4>{name}</h4>
                <a onClick= {() => setIsOpenProduct(!isOpenProduct)}>
                {isOpenProduct === false ? "Подробнее" : "Свернуть"}
                </a>
            </div>
            <p>
                <img src={caloriesImg} alt="Калории"/>
                <span>Калорийность</span><span>{ckal}</span>
            </p>
            <p>
                <img src={proteinsImg} alt="Белки"/>
                <span>Белки</span><span>{proteins}</span>
            </p>
            <p>
                <img src={fatsImg} alt="Жиры"/>
                <span>Жиры</span><span>{fats}</span>
            </p>
            <p>
                <img src={carbohydratesImg} alt="Углеводы"/>
                <span>Углеводы</span><span>{carbohydrates}</span>
            </p>
        </div>
        <div className={isOpenProduct === false ? "products-info d-none" : "products-info text-center w-50"}>
            More info
        </div>
    </div>
  )
}

export default ProductsBlock