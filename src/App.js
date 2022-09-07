import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./loginForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={LoginForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
