import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { nameContext } from './context/nameContext'
import Course from './components/Course'
import "./Cart.scss"

function Cart() {

    const { addCart, setAddCart } = useContext(nameContext)

    const { courseNum, setCourseNum } = useContext(nameContext)

    const cartAdded = localStorage.getItem("isAddedToCart")

    if (cartAdded === "true") {
        return (
            <div className='cart-menu'>
                <Navbar />
                <div className='cart-page-con'>
                    <Course courseNum={courseNum.one} coursePrice={1240000} />
                </div>
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