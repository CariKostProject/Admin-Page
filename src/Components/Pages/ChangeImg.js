import React, { Component } from "react";
import "../Css/Dorms.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
// import Modal1 from "./Modal1";

class ChangeImg extends Component {
  constructor(props) {
    super(props);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.state = {
      image: "",
      imageVal: {}
    };
  }
  componentDidMount() {}

  onSubmitImg() {
    // e.preventDefault();
    // this.setState({
    //   btnLoading: true
    // });
    console.log(this.props.query.get("id"));

    try {
      const formData = new FormData();
      formData.append("photos", this.state.imageVal);
      console.log(formData);

      Axios.patch(
        `https://ibukost.herokuapp.com/rooms/${this.props.query.get("id")}`,
        formData
      )
        .then(res => {
          {
            Swal.fire("Update Succes", "Photos Changed", "success").then(() => {
              window.location.href = "/admin?page=dorms";
            });
            // console.log("rooms count", this.state.roomsData.length);
          }
        })
        .catch(error => {
          console.log(error);
          Swal.fire("Update Failed", "Something went wrong", "error").then(
            () => {
              // this.props.history.replace("/admin?page=dorms");
            }
          );
        });
      // const { id_book } = this.props.match.params;
      // await this.props.dispatch(editNovel(id_book, formData));
      // window.location.reload(true);
      // this.setState({
      //   btnLoading: false
      // });
    } catch (error) {
      console.log(error);
    }
  }

  onChangeImg(e) {
    e.preventDefault();
    this.setState({
      image: e.target.value,
      imageVal: e.target.files[0]
    });
  }

  render() {
    console.log("image val", this.state.imageVal);
    // const query = new URLSearchParams(this.props.location.search);
    let id = this.props.query.get("id");
    // console.log(id);
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
            // encType="multipart/form-data"
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
                    id="image"
                    name="image"
                    onChange={this.onChangeImg}
                    placeholder="Photos ..."
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
                <input
                  type="button"
                  onClick={() => this.onSubmitImg()}
                  value="Change"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeImg;
