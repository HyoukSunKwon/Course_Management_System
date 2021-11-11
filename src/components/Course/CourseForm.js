import React from "react";
import TextInput from "../common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="course_no"
        label="Course_NO"
        onChange={props.onChange}
        name="course_no"
        value={props.course.course_no}
      />

      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="course_title"
        value={props.course.course_title}
      />

      <TextInput
        id="maxcapacity"
        label="Max Capacity"
        onChange={props.onChange}
        name="max_capacity"
        value={props.course.max_capacity}
      />

      <TextInput
        id="description"
        label=" Description"
        onChange={props.onChange}
        name="Description"
        className="form-control"
        value={props.course.Description}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
