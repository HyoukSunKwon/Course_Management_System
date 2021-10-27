import React, { Component } from "react";
import { getStudents} from "../api/studentApi"
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";



class StudentsPage extends Component {
  state = { students: [] };

  componentDidMount(){ 
    getStudents().then( s => 
    this.setState({students: s}));
  } 
  
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Student no</TableCell>
              <TableCell> First Name</TableCell>
              <TableCell> Last Name</TableCell>
              <TableCell> Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.students.map((s) => {
              return (
                <TableRow>
                  <TableCell>{s.student_no}</TableCell>
                  <TableCell>{s.first_name}</TableCell>
                  <TableCell>{s.last_name}</TableCell>
                  <TableCell>{s.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default StudentsPage;
