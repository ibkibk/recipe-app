import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">
              Features
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">
              Pricing
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>
      </>
    );
  }
}
