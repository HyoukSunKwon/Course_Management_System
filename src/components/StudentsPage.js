import React, { Component } from "react";
import { getStudents } from "../api/studentApi";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class StudentsPage extends Component {
  state = { students: [] };

  componentDidMount() {
    getStudents().then((s) => this.setState({ students: s }));
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <h1> Student </h1>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> Student No</TableCell>
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
      </Paper>
    );
  }
}

export default withStyles(styles)(StudentsPage);
