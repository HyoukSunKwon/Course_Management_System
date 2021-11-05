import React from "react";
import HomePage from "./HomePage";
import CoursesPage from "./Course/CoursesPage";
import Header from "./common/Header";
import StudentsPage from "./StudentsPage";
import { Route } from "react-router-dom";
import ManageCoursePage from "./Course/ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/course" component={ManageCoursePage} />
      <Route path="/students" component={StudentsPage} />
    </div>
  );
}

export default App;
