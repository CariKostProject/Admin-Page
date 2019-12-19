import React, { Component } from "react";
import "../Css/Dorms.css";
import { Link } from "react-router-dom";

class Dorms extends Component {
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  render() {
    // console.log("ROOMS", this.props.roomsData);

    return (
      <div>
        <div className="content">
          <Link to="?page=dormsadd">
            <button style={{ float: "right" }} className="button button1">
              Add Dorms
            </button>
          </Link>
          <h2>Dorms Table</h2>
          <div className="container">
            <div style={{ overflowX: "auto" }}>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                  {this.props.roomsData.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                          <Link to={`?page=changeimg&id=${item.id}`}>
                            <img width="200px" src={item.image} />
                          </Link>
                        </td>
                        <td>
                          Rp.
                          {this.formatNumber(item.price)}
                        </td>
                        <td>
                          <button className="button button2">Edit</button>
                          <button className="button button3">Delete</button>
                        </td>
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

export default Dorms;
