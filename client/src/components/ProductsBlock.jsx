import React, {useState} from "react"
import { ChartPie } from '@patternfly/react-charts';

import fatsImg from '../assets/trans-fat.png'
import caloriesImg from '../assets/calories.png'
import carbohydratesImg from '../assets/wheat.png'
import proteinsImg from '../assets/molecule.png'

function ProductsBlock({name, kcal, proteins, fats, carbohydrates}) {

    const [isOpenProduct, setIsOpenProduct] = useState(false);
    let all = carbohydrates + proteins + fats;

  return (
      <div className={isOpenProduct === false ? "row products-block" : "row products-block w-100"}>
        <div className={isOpenProduct === false ? "products-info" : "products-info w-50"}>
            <div className="products-block__title">
                <span className="text-uppercase font-weight-bold">
                    {name}
                </span>
                <a onClick= {() => setIsOpenProduct(!isOpenProduct)}>
                {isOpenProduct === false ? "Подробнее" : "Свернуть"}
                </a>
            </div>
            <p>
                <img src={caloriesImg} alt="Калории"/>
                <span className="w-100 text-left ml-2">Калорийность(кКал)</span><span>{kcal}</span>
            </p>
            <p>
                <img src={proteinsImg} alt="Белки"/>
                <span className="w-100 text-left ml-2">Белки(г.)</span><span>{proteins}</span>
            </p>
            <p>
                <img src={fatsImg} alt="Жиры"/>
                <span className="w-100 text-left ml-2">Жиры(г.)</span><span>{fats}</span>
            </p>
            <p>
                <img src={carbohydratesImg} alt="Углеводы"/>
                <span className="w-100 text-left ml-2">Углеводы(г.)</span><span>{carbohydrates}</span>
            </p>
        </div>
        <div className={isOpenProduct === false ? "products-info d-none" : "products-info text-center w-50"}>
            <div style={{ height: '100%', width: '100%' }}>
            <ChartPie
                ariaTitle="Соотношение белков, жиров и углеводов"
                constrainToVisibleArea={true}
                data={[{ x: 'Белки', y: proteins/all * 100 }, 
                { x: 'Жиры', y: fats/all * 100 }, 
                { x: 'Углеводы', y: carbohydrates/all * 100 }]}
                height={150}
                labels={({ datum }) => `${datum.x}: ${Math.round(datum.y)}%`}
                width={350}
                legendData={[{ name: 'Белки' }, { name: 'Жиры' }, { name: 'Углеводы' }]}
                legendOrientation="vertical"
                legendPosition="right"
                title={kcal}
                subTitle="kCal"
                />
            </div>
        </div>
    </div>
  )
}

export default ProductsBlock