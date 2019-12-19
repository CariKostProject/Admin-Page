import React, { Component } from "react";
import "./../Components/Css/Login.css";
import AuthService from "./AuthService";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
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
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        Swal.fire("Login Success", "Welcome to CariKos", "success").then(() => {
          this.props.history.replace("/admin");
        });
      })
      .catch(err => {
        // alert(err);
        Swal.fire("Login Failed", "Wrong username or password :(", "error");
      });
  }
  render() {
    return (
      <div>
        <div className="login">
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <form onSubmit={this.handleFormSubmit}>
            <div className="login-form">
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
              {/* <input
                type="submit"
                defaultValue="Login"
                className="login-button"
              /> */}
              <button className="login-button" type="submit" name="action">
                Login
              </button>
              <br />
              <Link to="/register" className="sign-up">
                Sign Up!
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

export default Login;
