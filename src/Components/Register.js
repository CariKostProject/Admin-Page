import React, { Component } from "react";
import "./../Components/Css/Login.css";
import AuthService from "./AuthService";
import Swal from "sweetalert2";
import Axios from "axios";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
    this.state = {
      labelName: "",
      fullname: "",
      phone: "",
      email: "",
      password: "",
      address: ""
    };
  }

  componentDidMount() {
    // M.AutoInit();
    if (this.Auth.loggedIn()) this.props.history.replace("/admin");
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const labelName = this.state.labelName;
    const fullname = this.state.fullname;
    const phone = this.state.phone;
    const email = this.state.email;
    const password = this.state.password;
    const address = this.state.address;
    const newPartner = {
      labelName,
      fullname,
      phone,
      email,
      password,
      address
    };
    Axios.post("https://ibukost.herokuapp.com/register/partner", newPartner)
      .then(res => {
        {
          Swal.fire("Register Success", "Please Login", "success").then(() => {
            window.location.href = "/";
          });
          // console.log("rooms count", this.state.roomsData.length);
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire("Register Failed", "Something went wrong", "error").then(
          () => {
            // this.props.history.replace("/admin?page=dorms");
          }
        );
      });
  }
  render() {
    return (
      <div>
        <div className="login">
          <div className="login-header">
            <h1>Register</h1>
          </div>
          <form>
            <div className="login-form">
              <h3>Full Name:</h3>
              <input
                type="text"
                placeholder="Full Name"
                name="fullname"
                id="fullname"
                onChange={this.handleChange}
                required
              />
              <br />
              <h3>Label Name:</h3>
              <input
                type="text"
                placeholder="Label Name"
                name="labelName"
                id="labelName"
                onChange={this.handleChange}
                required
              />
              <br />
              <h3>Phone:</h3>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                id="phone"
                onChange={this.handleChange}
                required
              />
              <br />
              <h3>Email:</h3>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                onChange={this.handleChange}
                required
              />
              <br />
              <h3>Password:</h3>
              <input
                required
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />
              <h3>Addres:</h3>
              <input
                type="text"
                placeholder="Addres"
                name="address"
                id="address"
                onChange={this.handleChange}
                required
              />
              <br />
              {/* <input
                type="submit"
                defaultValue="Login"
                className="login-button"
              /> */}
              <button
                onClick={this.handleFormSubmit}
                className="login-button"
                type="submit"
                name="action"
              >
                Register
              </button>
              <br />
              <Link to="/" className="sign-up">
                Sign In!
              </Link>
              <br />
              {/* <h6 className="no-access">Can't access your account?</h6> */}
            </div>
          </form>
        </div>
        {/* <div className="error-page">
          <div className="try-again">Error: Try again?</div>
        </div> */}
      </div>
    );
  }
}

export default Register;
