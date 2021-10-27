import React from 'react';
import HomePage from './HomePage';
import CoursesPage from './CoursesPage';
import Header from "./common/Header";

function App() {
    function getPage() {
    const route = window.location.pathname;
    if (route === "/course") return <CoursesPage />;
    return <HomePage />;
    }

    return(
    <div className="container-fluid">
        <Header />
        {getPage()}
    </div>
    );    
}

export default App;