import React, { useState } from 'react'
import CourseForm from './CourseForm'
import * as courseApi from '../api/courseApi'

function ManageCoursePage(props) {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    function handleChange(event) {
        const updatedCourse = { ...course, [event.target.name]: event.target.value }
        setCourse(updatedCourse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        courseApi.saveCourse(course)
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    )
}

export default ManageCoursePage