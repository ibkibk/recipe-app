import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe/Recipe";
import NavBar from "./NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Recipe />
    </div>
  );
}

export default App;
