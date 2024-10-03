import React, { useRef, useContext, useState } from 'react'
import "./SignUp.scss"
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { nameContext } from './context/nameContext';

function Login() {

    // const emailInput = useRef()
    // const passwordInput = useRef()
    // const nameInput = useRef()

    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    
    const navigate = useNavigate()

    const { name, setName } = useContext(nameContext);
    const { email, setEmail } = useContext(nameContext);
    const { password, setPassword } = useContext(nameContext);

    const setUserInfo = async () => {
        if (emailInput !== "" && passwordInput !== "" && nameInput !== "") {

            try {
                const response = await axios.post("https://66f44d9f77b5e88970991a7e.mockapi.io/makeUp-signUp", {
                    email: emailInput,
                    password: passwordInput,
                    name: nameInput
                })
                console.log(response.data)

                localStorage.setItem("Email", emailInput)
                localStorage.setItem("Name", nameInput)
                localStorage.setItem("Password", passwordInput)

                setName(nameInput)
                setEmail(emailInput)
                setPassword(passwordInput)

                toast.success(<h3> خوش آمدید </h3>, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    rtl: "true",
                    transition: Bounce,
                });

                setTimeout(() => {
                    navigate('/dashboard')
                }, 5100)

            } catch (error) {
                console.log(error)
            }

        } else {

            toast.error(<h3> لطفا همه اطلاعات خواسته شده را وارد کنید </h3>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                rtl: true,
                transition: Bounce,
                });

        }
    }

    return (
        <div className='login-con'>
            <div className="login-img"></div>
            <div className="login-form-con">
                <ToastContainer />
                <img src="/images/main-icon.svg" alt="icon" />
                <div className="login-form">
                    <div className="login-form-title">
                        <h1> ثبت نام </h1>
                        <span> لطفا فرم زیر را پر کنید </span>
                    </div>
                    <div className="form-con">
                        <input type="email" value={emailInput} onInput={(input) => {setEmailInput(input.target.value)}} placeholder='ایمیل خود را وارد کنید' />
                        <input type="text" value={nameInput} onInput={(input) => {setNameInput(input.target.value)}} placeholder='نام و نام خانوادگی خود را وارد کنید' />
                        <input type="password" value={passwordInput} onInput={(input) => {setPasswordInput(input.target.value)}} placeholder='رمز عبور خود را وارد کنید' />
                    </div>
                    <button className='confirm-sign-up-btn' onClick={setUserInfo}> تایید </button>
                    <button className='google-sign-up'>
                        <img src="/images/google-icon.svg" alt="google-icon" />
                        <span> با گوگل واد شوید </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login