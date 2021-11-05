import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div class="form-group">
        <label for="CourseNo"> Course No </label>
        <input
          id="course_no"
          type="text"
          onChange={props.onChange}
          name="CourseNo"
          class="form-control"
          value={props.course.courseNo}
        />
      </div>

      <div class="form-group">
        <label for="title"> Title </label>
        <input
          id="title"
          type="text"
          onChange={props.onChange}
          name="title"
          className="form-control"
          value={props.course.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="maxcapacity"> Max Capacity </label>
        <div className="field">
          <input
            id="maxcapacity"
            type="text"
            onChange={props.onChange}
            name="maxcapacity"
            className="form-control"
            value={props.course.maxcapacity}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description"> Description </label>
        <div className="field">
          <input
            id="description"
            type="text"
            onChange={props.onChange}
            name="description"
            className="form-control"
            value={props.course.description}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
