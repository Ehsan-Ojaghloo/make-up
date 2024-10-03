import React from 'react'
import { Link } from 'react-router-dom'

function UserPeek() {

    const localName = localStorage.getItem("Name")

    return (
        <Link to="/sign up" style={{textDecoration: "none", color: "black"}}>
            <div>
                <div id='user-peek' className="user-panel-peek">
                    <img src="/images/dashboard-user-icon.jpg" alt="user-icon" />
                    <span>{localName}</span>
                </div>
            </div>
        </Link>
    )
}

export default UserPeek