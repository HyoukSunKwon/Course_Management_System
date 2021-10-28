import React, { useState, useEffect } from "react";
import { getCourses } from "../../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, SetCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => SetCourses(_courses));
  }, []);

  return (
    <div>
      <h1> Courses </h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default CoursesPage;
