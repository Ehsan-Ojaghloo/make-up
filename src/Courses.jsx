import React, { useContext, useEffect, useState } from 'react'
import Course from './components/Course'
import Navbar from './components/Navbar'
import "./Courses.scss"
import axios from 'axios'

function Courses() {

    const [courseNum, setCourseNum] = useState([])

    useEffect(() => {
        axios.get("https://66f44d9f77b5e88970991a7e.mockapi.io/cart-items")
            .then(res => setCourseNum(res.data))
    }, [])


    return (
        <>
            <Navbar />
            <div className='courses-con'>
                {courseNum.map((info) => (
                    <div className="courses-list">
                        <Course courseNum={info.title} coursePrice={info.price}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Courses