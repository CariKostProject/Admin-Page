import React, { Component } from "react";
import "../Css/Error404.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
class Error404 extends Component {
  componentDidMount() {
    Swal.fire("Oops!", "Something went wrong", "error");
  }
  render() {
    return (
      <div>
        <div className="content">
          {}
          <div id="notfound">
            <div className="notfound">
              <div className="notfound-404">
                <h1>
                  4<span />4
                </h1>
              </div>
              <h2>Oops! Page Not Be Found</h2>
              <p>
                Sorry but the page you are looking for does not exist, have been
                removed. name changed or is temporarily unavailable
              </p>
              <Link to="./admin">Back to homepage</Link>
              {/* <a href="./admin"></a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;
