import React, { useContext } from 'react'
import "./Dashboard.scss"
import InnerWhiteBtn from './components/innerWhiteBtn'

function Dashboard() {

    const localName = localStorage.getItem("Name")
    const localEmail = localStorage.getItem("Email")
    const localPassword = localStorage.getItem("Password")

    if (localName !== null && localEmail !== null && localPassword !== null) {
        return (
            <div className='dashboard-con'>
                <div className="dashboard-user-info-con">
                    <div className="dashboard-user-info">
                        <div className="dashboard-btn-con">
                            <InnerWhiteBtn btnName={"ویرایش"} />
                            <InnerWhiteBtn btnName={"خروج"} />
                        </div>
                        <div className="dashboard-info">
                            <div className="dashboard-info-text">
                                <div className="info-text-con" dir='rtl'>
                                    <h2> نام و نام خانوادگی: {localName} </h2>
                                    <h2> ایمیل: {localEmail} </h2>
                                    <h2> رمز عبور: {localPassword} </h2>
                                </div>
                            </div>
                            <div className="dashboard-info-img">
                                <img src="/images/dashboard-user-icon.jpg" alt="user-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dasboard-other-info-con"></div>
            </div>

        )
    } else {
        return (
            <div>
                <h1> صفحه مورد نظر پیدا نشد </h1>
            </div>
        )
    }
}

export default Dashboard