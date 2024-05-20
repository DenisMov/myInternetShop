import { FaBasketShopping } from "react-icons/fa6";
import './appHeader.scss';
import React,{ useState } from "react";
import Order from "./Order";



const AppHeader = ({orders, onDelete}) => {
    let [cartOpen,setCartOpen] = useState(false)
    
    const showOrders = () => {
        let summa = 0
        orders.forEach(el => summa += Number.parseFloat(el.price))

        return (<div>
            {orders.map(el => (
                <Order onDelete={onDelete} key={el.id} item={el}/>
            ))}

            <p className="summa">Сума: {new Intl.NumberFormat().format(summa)} $</p>
        </div>)
    }

    const showNothing = () => {
        return (<div className="empty">
            <h2>Товари відсутні</h2>
        </div>)
    }

    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#">
                    <span>My</span> internet store
                </a>
            </h1>
            <nav className="app__menu">
                <li><a href="#">Про нас</a></li>
                <li><a href="#">Гарантія</a></li>
                <li><a href="#">Відгуки</a></li>
                <li><a href="#">Контаки</a></li>
                <FaBasketShopping onClick={()=> setCartOpen(cartOpen => !cartOpen) } className={`shop-cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className="shop-cart">
                        {orders.length > 0 ? 
                        showOrders(orders) : showNothing()}
                    </div>
                )}
            </nav>
        </header>
    )
}

export default AppHeader;