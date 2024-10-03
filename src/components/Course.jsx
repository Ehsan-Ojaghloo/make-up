import React, { useContext } from 'react'
import "./Course.scss"
import { nameContext } from '../context/nameContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Course({courseNum , coursePrice}) {

  const { isCart, setIsCart } = useContext(nameContext)

  const addToCart = ()=> {
    setIsCart(true)
  }

  console.log(isCart)

  return (
    <div className='course-con'>
        <img src="/images/course-bg.png" alt="make-up" />
        <div className='course-text-con'>
            <div>
                <h2> {courseNum} </h2>
                <p> با این دوره شما می توانید اولین تجربه خود را در حوزه آرایشگری داشته باشید و در هر زمانی درآمد خوبی بدست بیاورید </p>
                <span> {coursePrice} تومان </span>
            </div>
            <Link to="/"><button onClick={addToCart}> افزودن به سبد خرید </button></Link>
        </div>
    </div>
  )
}

export default Course