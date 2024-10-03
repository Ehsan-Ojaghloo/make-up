import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import UserPeek from './UserPeek'
import LoignBtn from "./LoginBtn"

function Navbar() {

    const localName = localStorage.getItem("Name")

    return (
        <div className='navbar-con'>
            <nav>
                <div className="nav-btn-con">
                    {localName !== null ? <UserPeek /> : <LoignBtn />}
                    <div className='cart-con'>
                        <img src="/public/images/cart.svg" alt="cart" />
                    </div>
                </div>
                <ul>
                    <Link to="/courses" style={{ textDecoration: "none", color: "black" }}><li> دوره ها </li></Link>
                    <span>|</span>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}><li> صفحه اصلی </li></Link>
                </ul>
                <img src="/public/images/main-icon.svg" alt="site-icon" />
            </nav>
        </div>
    )
}

export default Navbar