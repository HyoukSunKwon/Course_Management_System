import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    course_no: "",
    title: "",
    maxcapacity: null,
    description: "",
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  }

  return (
    <>
      <br />
      <h2> Manage Course</h2>
      <br />
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
