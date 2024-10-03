import React, { useContext } from 'react'
import Course from './components/Course'
import Navbar from './components/Navbar'
import "./Courses.scss"
import { nameContext } from './context/nameContext'

function Courses() {

    const {courseNum, setCourseNum} = useContext(nameContext)

    return (
        <>
            <Navbar />
            <div className='courses-con'>
                <div className="courses-list">
                    <Course courseNum={courseNum.one} coursePrice={1240000} />
                </div>
            </div>
        </>
    )
}

export default Courses