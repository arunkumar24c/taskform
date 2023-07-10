import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import FormPage from "./FormPage";
import DisplayPage from "./DisplayPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={FormPage} />
        <Route path="/display" component={DisplayPage} />
      </Routes>
    </Router>
  );
};

export default App;
