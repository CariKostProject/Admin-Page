import React, { Component } from "react";
import "../Css/Dorms.css";
// import Modal1 from "./Modal1";

class Category extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <button style={{ float: "right" }} className="button button1">
            Add Category
          </button>
          <h2>Category Table</h2>
          {/* <p></p>
          <p></p> */}
          <div style={{ overflowX: "auto" }}>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Desc</th>
                  <th>Icon</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>Simple</td>
                  <td>Simple Dorms</td>
                  <td>
                    <img
                      width="50px"
                      src="https://image.flaticon.com/icons/png/512/1142/1142015.png"
                    />
                  </td>
                  <td>
                    <button className="button button2">Edit</button>
                    <button className="button button3">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
