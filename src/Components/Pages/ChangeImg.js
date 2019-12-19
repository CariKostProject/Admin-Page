import React, { Component } from "react";
import "../Css/Dorms.css";
import { Link } from "react-router-dom";
// import Modal1 from "./Modal1";

class ChangeImg extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    // const query = new URLSearchParams(this.props.location.search);
    let id = this.props.query.get("id");
    console.log(id);
    const rooms = this.props.roomsData.filter(item => item.id === parseInt(id));
    // console.log(
    //   "Rooms change img",
    //   this.props.roomsData.filter(item => item.id === parseInt(id))
    // );
    // console.log(this.props.img);
    // console.log(this.props.id);
    // const img = rooms;
    // console.log("link img", img[0]);
    return (
      <div>
        <div className="content">
          <Link to="?page=dorms">
            <button style={{ float: "right" }} className="button button1">
              Back
            </button>
          </Link>
          <h2>Change Image</h2>
          <div className="container">
            <form
            // action="/action_page.php"
            >
              {rooms.map(item => {
                return <img src={item.image} width="200" />;
              })}
              <div className="row">
                {/* <div className="col-25">
                  <label htmlFor="name">Change Image</label>
                </div> */}
                <div className="col-75">
                  <input
                    type="file"
                    id="name"
                    name="name"
                    placeholder="Name ..."
                  />
                </div>
              </div>
              {/* <div className="row">
                <div className="col-25">
                  <label htmlFor="country">Country</label>
                </div>
                <div className="col-75">
                  <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                  </select>
                </div>
              </div> */}
              <br />
              <div className="row">
                <input type="submit" value="Change" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeImg;
