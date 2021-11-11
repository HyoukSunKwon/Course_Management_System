import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../../api/courseApi";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    course_no: "",
    course_title: "",
    max_capacity: null,
    Description: "",
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course);
  }

  return (
    <>
      <br />
      <h2> Manage Course</h2>
      <br />
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
