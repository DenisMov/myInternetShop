import React from 'react'
import { connect } from 'react-redux';
import { chooseCategory } from '../../actions/actions';


const mapDispatchToProps = {
    chooseCategory
};

const Categories = ({chooseCategory}) => {
    const categories = [
        {
            key:'All',
            name:'Все',
        },
        {
            key:'Смартфони',
            name:'Смартфони',
        },
        {
            key:'Навушники',
            name:'Навушники',
        },
        {
            key:'Ноутбуки',
            name:'Ноутбуки',
        },
        {
            key:'Планшети',
            name:'Планшети',
        }
    ]

    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Categories);
