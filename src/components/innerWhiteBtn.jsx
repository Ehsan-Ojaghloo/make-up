import React from 'react'
import "./innerWhiteBtn.scss"
import { useNavigate } from 'react-router-dom'

function innerWhiteBtn({ btnName }) {

  const navigate = useNavigate()

  const logOut = ()=> {
    localStorage.removeItem("Name")
    localStorage.removeItem("Email")
    localStorage.removeItem("Password")

    setTimeout(() => {
      navigate("/sign up")
    }, 3000);

  }

  return (
    <div>
      <button className='inner-white-btn' onClick={logOut}> {btnName} </button>
    </div>
  )
}

export default innerWhiteBtn