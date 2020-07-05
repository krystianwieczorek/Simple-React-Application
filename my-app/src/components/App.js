import React from "react";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/about' component={AboutPage} />
        <Redirect from='/Home' to='/' />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
