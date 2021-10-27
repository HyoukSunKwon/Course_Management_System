import React, { Component } from "react";
import { getCourses } from "../api/courseApi";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

class CoursesPage extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  render() {
    return (
      <>
        <h1> Courses</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Course - No</TableCell>
              <TableCell> Title </TableCell>
              <TableCell> Max Capacity </TableCell>
              <TableCell> Description </TableCell>
              <TableCell> Number of Students </TableCell>
              <TableCell> Number of Available Spots</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.courses.map((course) => {
              return (
                <TableRow>
                  <TableCell>{course.course_no}</TableCell>
                  <TableCell>{course.course_title}</TableCell>
                  <TableCell>{course.max_capacity}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </>
    );
  }
}

export default CoursesPage;
