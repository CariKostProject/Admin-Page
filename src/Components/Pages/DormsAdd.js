import React, { Component } from "react";
import "../Css/DormsAdd.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
let id_user;
class DormsAdd extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.state = {
      description: "",
      price: "",
      room_type_id: "",
      room_area: "",
      name: "",
      id_partner: "",
      status: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSave() {
    const description = this.state.description;
    const price = this.state.price;
    const room_type_id = this.state.room_type_id;
    const room_area = this.state.room_area;
    const name = this.state.name;
    const id_partner = id_user;
    const status = 1;
    // console.log("des", description); console.log("price", price); console.log("room id", room_type_id); console.log("room area", room_area); console.log("name", name); console.log("id parner", id_partner); console.log("id status", status);
    const newRooms = {
      description,
      price,
      room_type_id,
      room_area,
      name,
      id_partner,
      status
    };
    // console.log(newRooms);
    Axios.post("https://ibukost.herokuapp.com/rooms/", newRooms)
      .then(res => {
        {
          Swal.fire("Add Success", "New Rooms Added", "success").then(() => {
            window.location.href = "/admin?page=dorms";
          });
          // console.log("rooms count", this.state.roomsData.length);
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire("Add Failed", "Something went wrong", "error").then(() => {
          // this.props.history.replace("/admin?page=dorms");
        });
      });
  }

  render() {
    // console.log(this.props.id_user);
    id_user = this.props.id_user;
    return (
      <div>
        <div className="content">
          <Link to="?page=dorms">
            <button style={{ float: "right" }} className="button button1">
              Back
            </button>
          </Link>
          <h2>Add Dorms</h2>
          <div className="container">
            <form>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="col-75">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name ..."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="room_area">Room Area</label>
                </div>
                <div className="col-75">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="room_area"
                    name="room_area"
                    placeholder="Room Area ..."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="price">Price</label>
                </div>
                <div className="col-75">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Price ..."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="description">Desc</label>
                </div>
                <div className="col-75">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Desc ..."
                    style={{ height: "200px" }}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="room_type_id">Room Type</label>
                </div>
                <div className="col-75">
                  <select
                    onChange={this.handleChange}
                    id="room_type_id"
                    name="room_type_id"
                  >
                    <option disabled selected>
                      Choose
                    </option>
                    <option value={1}>VIP</option>
                  </select>
                </div>
              </div>

              <div style={{ float: "right" }} className="row">
                <input
                  className="button button1"
                  type="button"
                  value="Save"
                  onClick={this.onSave}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DormsAdd;
