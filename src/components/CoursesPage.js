import React, { Component } from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends Component {
  state ={
    courses: []
  };

  componentDidMount(){
    getCourses().then(courses => this.setState({ courses: courses }));
  }

  render() {
    return (
      <>
        <h1> Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th> Course - No</th>
              <th> Title </th>
              <th> Max Capacity </th>
              <th> Description </th>
              <th> Number of Students </th>
              <th> Number of Available Spots</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course) => {
              return (
                <tr>
                  <td>{course.course_no}</td>
                  <td>{course.course_title}</td>
                  <td>{course.max_capacity}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
