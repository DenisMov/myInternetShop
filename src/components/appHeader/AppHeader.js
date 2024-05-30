import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import {connect} from 'react-redux';
import Order from "./Order";
import {toggleCart } from "../../actions/actions";
import './appHeader.scss';

const mapStateToProps = (state) => ({
    orders: state.orders,
    isCartOpen: state.isCartOpen,
    deleteOrder: state.deleteOrder
});

const mapDispatchToProps = {
    toggleCart: toggleCart
};

const AppHeader = ({orders, deleteOrder, isCartOpen, toggleCart}) => {   

    const showOrders = () => {
        let summa = 0
        orders.forEach(el => summa += Number.parseFloat(el.price))

        return (<div>
            {orders.map(el => (
                <Order onDelete={deleteOrder} key={el.id} item={el}/>
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
                <FaBasketShopping onClick={toggleCart} className={`shop-cart-button ${isCartOpen && 'active'}`} />

                {isCartOpen && (
                    <div className="shop-cart">
                        {orders.length > 0 ? 
                        showOrders() : showNothing()}
                    </div>
                )}
            </nav>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);