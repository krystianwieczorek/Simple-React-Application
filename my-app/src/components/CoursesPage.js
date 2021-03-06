import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CoursesList"
import { Link } from 'react-router-dom'

function CoursesPage() {
  const [courses, setCurses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCurses(_courses));
  }, [])

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course' >
        Add Course
      </Link>
      <CoursesList courses={courses} />
    </>
  );
}



export default CoursesPage;
