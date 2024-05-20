import React from 'react'

const Categories = ({chooseCategory}) => {
    const categories = [
        {
            key:'all',
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

export default Categories