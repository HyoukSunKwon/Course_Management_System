import React from "react";
import TextInput from "../common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="course_no"
        label="Course_NO"
        onChange={props.onChange}
        name="CourseNo"
        value={props.course.courseNo}
      />

      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
      />

      <TextInput
        id="maxcapacity"
        label="Max Capacity"
        onChange={props.onChange}
        name="maxcapacity"
        value={props.course.maxcapacity}
      />

      <TextInput
        id="description"
        label=" Description"
        onChange={props.onChange}
        name="description"
        className="form-control"
        value={props.course.description}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
