import React, {useState} from 'react';
import AppHeader from "../appHeader/AppHeader";
import AppList from "../appList/AppList";
import Categories from '../appList/Categories';
import ShowFullItem from '../showFullItem/showFullItem';


const App = () => {
    const [orders, setOrders] = useState([]);
    const items = [
        {
            id: 1,
            title: "Apple iPhone 14",
            img: 'Iphone14Pro.webp',
            desc: "Смартфон с 6.1-дюймовым OLED-дисплеем, процессором A15 Bionic и тройной камерой 12 МП.",
            category: "Смартфони",
            price: "89999"
        },
        {
        id: 2,
        title: "Samsung Galaxy S21",
        img: "Samsung Galaxy S21.avif",
        desc: "Смартфон с 6.2-дюймовым AMOLED-дисплеем, процессором Exynos 2100 и тройной камерой 64 МП.",
        category: "Смартфони",
        price: "79999"
        },
        {
        id: 3,
        title: "Sony WH-1000XM4",
        img: "Sony WH-1000XM4.png",
        desc: "Беспроводные наушники с активным шумоподавлением, поддержкой LDAC и автономностью до 30 часов.",
        category: "Навушники",
        price: "29999"
        },
        {
        id: 4,
        title: "Apple MacBook Air M1",
        img: "Apple MacBook Air M1.webp",
        desc: "Ноутбук с 13.3-дюймовым Retina-дисплеем, процессором Apple M1 и автономностью до 18 часов.",
        category: "Ноутбуки",
        price: "99999"
        },
        {
        id: 5,
        title: "Samsung Galaxy Tab S7",
        img: "Samsung Galaxy Tab S7.png",
        desc: "Планшет с 11-дюймовым TFT-дисплеем, процессором Snapdragon 865+ и поддержкой S Pen.",
        category: "Планшети",
        price: "59999"
        },
        {
        id: 6,
        title: "Samsung Galaxy S23",
        img: "Samsung Galaxy S23.png",
        desc: "Смартфон с 6.6-дюймовым AMOLED-дисплеем, процессором Exynos 3100 и тройной камерой 94 МП.",
        category: "Смартфони",
        price: "93999"
        },
        {
            id: 7,
            title: "Apple iPhone 15 Pro",
            img: "Apple iPhone 15 Pro.png",
            desc: "Смартфон с 6.1-дюймовым OLED-дисплеем, процессором A19 Bionic и тройной камерой 24 МП.",
            category: "Смартфони",
            price: "129999"
        },
        {
            id: 8,
            title: "Samsung Galaxy Tab S8",
            img: "Samsung Galaxy Tab S8.avif",
            desc: "Планшет оснащен 11-дюймовым TFT-экраном с разрешением 2560x1600 пикселей",
            category: "Планшети",
            price: "84399"
        },
        {
        id: 9,
        title: "Apple MacBook Air M3",
        img: "Apple MacBook Air M3.webp",
        desc: "Ноутбук с 13.3-дюймовым Retina-дисплеем, процессором Apple M1 и автономностью до 18 часов.",
        category: "Ноутбуки",
        price: "155500"
        },

    ];
    const [currentItems, setCurrentItems] = useState(items)
    const [showFullItem, setShowFullItem] = useState(false)
    const [fullItem, setFullItem] = useState(null)

    const addToOrder = (item) => {
        if (!orders.some(order => order.id === item.id)) {
            setOrders([...orders, item]);
        }
    };

    function deleteOrder(id) {
        setOrders(orders.filter(el => el.id !== id))
    }

    function chooseCategory(category) {
        if (category === 'all') {
            setCurrentItems(items)
            return
        }
        setCurrentItems(items.filter(el => el.category === category))
    }

    function onShowItem(item) {
        setFullItem(item)
        setShowFullItem(showFullItem => !showFullItem)
    }

    return (
        <div className="app">
            <AppHeader orders={orders} onDelete={deleteOrder}/>
            
            <div className="app__content">
                <Categories chooseCategory={chooseCategory}/>
                <AppList onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />
                {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
            </div>
            
        </div>
  );
}

export default App;