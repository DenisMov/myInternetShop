import React from "react";
import {connect} from 'react-redux';
import { addToOrder, setFullItem, toggleShowFullItem } from "../../actions/actions";

import './appList.scss';
import buttonImg from '../../resources/img/Button.png'


const mapStateToProps = (state) => ({
    items: state.currentItems || []
});

const mapDispatchToProps = {
    addToOrder,
    setFullItem,
    toggleShowFullItem
}

const AppList = ({items, addToOrder, setFullItem, toggleShowFullItem}) => {

    const onShowItem = (item) => {
        setFullItem(item);
        toggleShowFullItem();
    }

    return (
        <div className="appMenu__list">
            <ul className="appMenu__grid">
                {Array.isArray(items) && items.map(item => (
                    <li key={item.id}   className="appMenu__item">
                        <div className='appMenu__backgraund'></div>
                        <img src={"./img/" + item.img} alt='' onClick={() => onShowItem(item)}/>
                        <div className="appMenu__name">{item.title}</div>
                        <div className="appMenu__info">{item.category}</div>
                        <div className='appMenu__buying'>
                            <div className="appMenu__price">{item.price} ₴ </div>
                            <div className='appMenu__buttonImg' onClick={() => addToOrder(item)}>
                                <img src={buttonImg} alt="Додати" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList);
