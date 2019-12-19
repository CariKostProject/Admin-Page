import React, { Component } from "react";
import "./Css/Header.css";
import AuthService from "./AuthService";
const Auth = new AuthService();
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    Auth.logout();
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <div className="header">
          <a href="/admin" className="logo">
            {/* A D M I N  */}
            {this.props.name}
          </a>
          <div className="header-right ">
            <button
              className="active button button5"
              onClick={this.handleLogout}
            >
              Logout
            </button>
            {/* <a href="#contact">Contact</a>
            <a href="#about">About</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
