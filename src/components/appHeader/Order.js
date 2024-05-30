import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { deleteOrder } from '../../actions/actions'
import { connect } from 'react-redux';

const Order = ({ item,  deleteOrder }) => {

    const onDelete = () => {
        deleteOrder(item.id);
    }

    return (
        <div className='item'>
            <img src={"./img/" + item.img}  alt=''/>
            <h2>{item.title}</h2>
            <p>{`${item.price}$`}</p>
            <FaTrash className='delete-icon' onClick={onDelete}/>
        </div>
    );
};


export default connect(null, {deleteOrder})(Order);