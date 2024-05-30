import React from 'react'
import {connect} from 'react-redux'
import { addToOrder, toggleShowFullItem } from '../../actions/actions'
import './showFullItem.scss'
import buttonImg from '../../resources/img/Button.png'
import { IoIosClose } from "react-icons/io";


const mapStateToProps = (state) => ({
    item: state.fullItem,
    showFullItem: !state.showFullItem
});

const mapDispatchToProps = {
    addToOrder,
    toggleShowFullItem
}

const ShowFullItem  = ({item, addToOrder, showFullItem, toggleShowFullItem}) => {

    if (!item) {
        return null;
    }
    
    if (!item || !showFullItem) {
        return null;
    }

    return (
        <div className="full-item">
            <div>
                <li className="fullItem__item">
                    <IoIosClose onClick={toggleShowFullItem} className="fullItem__close" />
                    <div className="fullItem__block">
                        <img src={"./img/" + item.img} alt='' onClick={toggleShowFullItem} />
                    </div>
                    <div className="fullItem__name">{item.title}</div>
                    <div className="fullItem__info">{item.category}</div>
                    <div className='fullItem__buying'>
                        <div className="fullItem__price">{item.price} ₴</div>
                        <div className='fullItem__buttonImg' onClick={() => addToOrder(item)}>
                            <img src={buttonImg} alt="додати" />
                        </div>
                    </div>
                </li> 
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFullItem);


