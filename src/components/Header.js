import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart';

function Header(props) {
    //кастомный хук для расчета суммы
    const {totalPrice} = useCart();


    
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center	">
                    <img width={50} height={40} src="/img/logo.png" alt="Logo" />
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p" >
                    <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
                    <span>{totalPrice} грн</span>
                </li>
                <Link to="/favorites">
                    <li className="mr-20 cu-p" >
                        <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
                    </li>
                </Link>
                <Link to="/orders">
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
                </li>
                </Link>
            </ul>
        </header>
    )
}

export default Header;