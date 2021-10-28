import React from 'react';

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

function CourseList(props){
    const { classes } = props;
    return(
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> Course No</TableCell>
              <TableCell> Title </TableCell>
              <TableCell> Max Capacity </TableCell>
              <TableCell> Description </TableCell>
              <TableCell> Number of Students </TableCell>
              <TableCell> Number of Available Spots</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.courses.map((course) => {
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
      </Paper>
    );

}

export default withStyles(styles)(CourseList);