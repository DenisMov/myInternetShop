import React from "react";

import './appList.scss';
import buttonImg from '../../resources/img/Button.png'

const AppList = ({item, items, onAdd, onShowItem}) => {
    return (
        <div className="appMenu__list">
            <ul className="appMenu__grid">
                {items && items.map(item => (
                    <li key={item.id}   className="appMenu__item">
                        <div className='appMenu__backgraund'></div>
                        <img src={"./img/" + item.img} alt="photo" onClick={() => onShowItem(item)}/>
                        <div className="appMenu__name">{item.title}</div>
                        <div className="appMenu__info">{item.category}</div>
                        <div className='appMenu__buying'>
                            <div className="appMenu__price">{item.price} ₴ </div>
                            <div className='appMenu__buttonImg' onClick={() => onAdd(item)}>
                                <img src={buttonImg} alt="ph" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* <button className="button button__main button__long">
                <div className="inner">Добавити ще</div>
            </button> */}
        </div>
    )
}

export default AppList;
