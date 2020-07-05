import React, { useState } from 'react'
import CourseForm from './CourseForm'
import * as courseApi from '../api/courseApi'
import { toast } from 'react-toastify'

function ManageCoursePage(props) {
    const [errors, setError] = useState({})
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

    function formIsValid() {
        const _errors = {}

        if (!course.title) _errors.title = "Title is required!"
        if (!course.authorId) _errors.authorId = "Author Id is required!"
        if (!course.category) _errors.category = "Category is required!"

        setError(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses")
            toast("Course saved!")
        })
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors={errors}
                course={course}
                nChange={handleChange}
                onSubmit={handleSubmit} />
        </>
    )
}

export default ManageCoursePage