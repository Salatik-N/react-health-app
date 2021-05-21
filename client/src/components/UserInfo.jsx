import React from 'react'

import men from '../assets/user-m.png'
//import women from '../assets/user-w.png'
import edit from '../assets/user-edit.png'

function UserInfo() {
    return(
            <div className="user-data">
                <div className="user-name">
                    <img src={men} alt="Мужчина"/>
                    <span> Никита </span>
                    <div className="user-edit">
                        <img src={edit} alt="Изменить"/>
                    </div>
                </div>
                <div className="user-feature">
                    <span>Мужчина 21 год</span>
                    <span>Рост: 188 см</span>
                    <span>Вес: 82 кг</span>
                </div>
            </div>
    )}


export default UserInfo