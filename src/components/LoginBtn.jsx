import React from 'react'
import { Link } from 'react-router-dom'

function LoginBtn() {
    return (
        <div>
            <Link to='/sign up'><button> ثبت نام | ورود </button></Link>
        </div>
    )
}

export default LoginBtn