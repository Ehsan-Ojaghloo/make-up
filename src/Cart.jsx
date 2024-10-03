import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { nameContext } from './context/nameContext'
import Course from './components/Course'
import "./Cart.scss"
import axios from 'axios'

function Cart() {

    const { addCart, setAddCart } = useContext(nameContext)

    const { isCart, setIsCart } = useContext(nameContext)

    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get("https://66f44d9f77b5e88970991a7e.mockapi.io/cart-items")
            .then(res => setCart(res.data))
    }, [])

    if (isCart === true) {
        return (
            <div className='cart-menu'>
                <Navbar />
                {isCart.map((info) => (
                    <div>
                        <div className='cart-page-con'>
                            <Course courseNum={info.title} coursePrice={info.price} />
                        </div>
                    </div>
                ))}
                <button> ادامه فرایند خرید </button>
            </div>
        )
    } else {
        return (
            <>
                <Navbar />
                <h1 style={{ fontFamily: "dirooz", color: '#ccc', textAlign: 'center' }}> سبد خرید شما خالی است </h1>
            </>
        )
    }
}
export default Cart