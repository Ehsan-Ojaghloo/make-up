import React from 'react'
import Navbar from './components/Navbar'
import "./Hero.scss"

function Hero() {
  return (
    <div className='hero-con'>
      <Navbar />
      <div className="hero">
        <div className="hero-item-con">
          <img src="/images/hero-bg.jpg" alt="background" />
          <div className="hero-text-con">
            <h1>
              هدیه‌ای از ما به شما:
              <br />
              <span><ins>بهترین نسخه خود را باور کنید</ins></span>
            </h1>
            <p> برای شروع این تجربه جذاب همراه ما باشید </p>
            <button> شروع کنید </button>
          </div>
        </div>
      </div>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </div>
  )
}

export default Hero