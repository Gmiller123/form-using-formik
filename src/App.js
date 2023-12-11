import React from "react";
import Forms from "./component/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
