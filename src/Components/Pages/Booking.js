import React, { Component } from "react";
import "../Css/Dorms.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import decode from "jwt-decode";
import Swal from "sweetalert2";
class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: []
    };
  }

  componentDidMount() {
    const id_partner = decode(localStorage.getItem("id_token")).id;
    Axios.get(`https://ibukost.herokuapp.com/booking/show/${id_partner}`)
      .then(res => {
        {
          this.setState({
            bookingData: res.data.result
          });
          console.log("booking data", this.state.bookingData);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  confirmBooking(id) {
    const id_booking = id;
    // console.log(id_booking);
    Axios.patch(`https://ibukost.herokuapp.com/booking/${id_booking}`)
      .then(res => {
        {
          Swal.fire("Confirm Succes", "Confirm Paid Succes", "success").then(
            () => {
              window.location.href = "/admin?page=booking";
            }
          );
          // console.log("rooms count", this.state.roomsData.length);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // console.log("ROOMS", this.props.roomsData);

    return (
      <div>
        <div className="content">
          {/* <Link to="?page=dormsadd">
            <button style={{ float: "right" }} className="button button1">
              Add Dorms
            </button>
          </Link> */}
          <h2>Booking Table</h2>
          <div className="container">
            <div style={{ overflowX: "auto" }}>
              <table>
                <tbody>
                  <tr>
                    <th>User</th>
                    <th>Room</th>
                    <th>Status</th>
                    {/* <th>Price</th>*/}
                    <th>Action</th>
                  </tr>
                  {this.state.bookingData.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.fullname}</td>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                        <td>
                          {item.status === "Paid" ? (
                            // <input
                            //   className="button button1"
                            //   type="button"
                            //   value="Confrim Paid"
                            //   disabled
                            // />
                            "-"
                          ) : (
                            <input
                              className="button button2 "
                              type="button"
                              value="Confrim Paid"
                              onClick={() => this.confirmBooking(item.id)}
                            />
                          )}
                        </td>
                        {/* <td>
                      <button className="button button2">Edit</button>
                      <button className="button button3">Delete</button>
                    </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
