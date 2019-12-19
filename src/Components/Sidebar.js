import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <Link
            className={this.props.pages === null ? "active" : ""}
            to="./admin"
          >
            Home
          </Link>
          <Link
            to="?page=dorms"
            className={
              this.props.pages === "dorms" ||
              this.props.pages === "dormsadd" ||
              this.props.pages === "changeimg"
                ? "active"
                : ""
            }
          >
            Dorms
          </Link>
          {/* <Link
            to="?page=category"
            className={this.props.pages === "category" ? "active" : ""}
          >
            Category
          </Link> */}
          <Link
            className={this.props.pages === "profile" ? "active" : ""}
            to="?page=profile"
          >
            Profile
          </Link>
          <Link
            className={this.props.pages === "booking" ? "active" : ""}
            to="?page=booking"
          >
            Booking
          </Link>
          {/* <Link to="?page=zzz">Test Error Link</Link> */}
        </div>
      </div>
    );
  }
}

export default Sidebar;
