import React, { Component } from "react";
import "../Css/Profile.css";
import { Link } from "react-router-dom";
// import Modal1 from "./Modal1";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    console.log(this.props.userProfile);

    return (
      <div>
        <div className="content">
          <h2 style={{ textAlign: "center" }}>Profile</h2>
          <div className="card">
            <img
              src={this.props.userProfile.photo}
              style={{ width: "100", height: "50" }}
            />
            <h1>{this.props.userProfile.fullname}</h1>
            <p className="title">{this.props.userProfile.email}</p>
            <p>{this.props.userProfile.region}</p>
            {/* <div style={{ margin: "24px 0" }}> */}
            {/* <a href="#">
                <i className="fa fa-dribbble" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa fa-facebook" />
              </a> */}
            {/* </div> */}
            <p>{/* <button>Change Photo</button> */}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
