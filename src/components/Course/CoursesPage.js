import React, { useState, useEffect } from "react";
import { getCourses } from "../../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, SetCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => SetCourses(_courses));
  }, []);

  return (
    <div>
      <br />
      <h1> Courses </h1>
      <br />
      <Link to="/course">
        <button type="button" className="btn btn-primary">
          Add Course
        </button>
      </Link>
      <CourseList courses={courses} />
    </div>
  );
}

export default CoursesPage;
