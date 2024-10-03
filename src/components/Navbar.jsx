import React, { useContext } from 'react'
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
                    {localName !== "" ? <UserPeek/> : <LoignBtn/>}
                    <img src="/public/images/cart.svg" alt="cart" />
                </div>
                <ul>
                    <li> صفحه اصلی </li>
                    <span>|</span>
                    <li> دوره ها </li>
                </ul>
                <img src="/public/images/main-icon.svg" alt="site-icon" />
            </nav>
        </div>
    )
}

export default Navbar