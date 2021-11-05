import React from "react";


function CourseList(props) {
  return (
    <div >
      <table  className="table table-striped">
        <thead className="text-center text-justify bg-light">
          <tr>
            <th> Course No</th>
            <th> Title </th>
            <th> Max Capacity </th>
            <th> Description </th>
            <th> Number of Students </th>
            <th> Number of Available Spots</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => {
            return (
              <tr>
                <td className="text-center">{course.course_no}</td>
                <td className="text-center">{course.course_title}</td>
                <td className="text-center">{course.max_capacity}</td>
                <td>{course.Description}</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
