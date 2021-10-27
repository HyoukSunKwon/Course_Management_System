import React from "react";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import StudentsPage from "./StudentsPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/course") return <CoursesPage />;
    if (route === "/student") return <StudentsPage />;
    return <HomePage />;
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
