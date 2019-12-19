import React, { Component } from "react";
import "./../Components/Css/Admin.css";
import Sidebar from "./Sidebar";
import Content from "./Pages/Content";
import Dorms from "./Pages/Dorms";
import Category from "./Pages/Category";
import Error404 from "./Pages/Error404";
import Header from "./Header";
import DormsAdd from "./Pages/DormsAdd";
import Axios from "axios";
import decode from "jwt-decode";
import ChangeImg from "./Pages/ChangeImg";
import Profile from "./Pages/Profile";
import Booking from "./Pages/Booking";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: [],
      roomsData: []
    };
  }

  componentDidMount() {
    const id = decode(localStorage.getItem("id_token")).id;
    // console.log("id", id);
    // GET PARTNER PROFILE START
    Axios.get(`https://ibukost.herokuapp.com/partner/show/${id}`)
      .then(res => {
        {
          this.setState({
            userProfile: res.data.data[0]
          });
          // console.log(this.state.userProfile);
        }
      })
      .catch(error => {
        console.log(error);
      });
    // GET PARTNER PROFILE END
    // GET ROOM PARTNER START
    Axios.get(`https://ibukost.herokuapp.com/rooms/${id}`)
      .then(res => {
        {
          this.setState({
            roomsData: res.data.data
          });
          // console.log("rooms count", this.state.roomsData.length);
        }
      })
      .catch(error => {
        console.log(error);
      });
    // GET ROOM PARTNER END
  }

  render() {
    if (!localStorage.getItem("id_token")) {
      window.location.href = "/";
    }
    // console.log(localStorage.getItem("id_token"));
    let data = [1];
    // let page = this.props.location.search;
    const query = new URLSearchParams(this.props.location.search);
    let pages = query.get("page");
    // console.log("page=", pages);
    const roomstotal = this.state.roomsData.length;
    // console.log(roomstotal);
    return (
      <div>
        <Header name={this.state.userProfile.fullname} />
        <Sidebar pages={pages} />
        {data.map((item, index) => {
          if (pages === null) {
            return <Content roomstotal={roomstotal} />;
          } else if (pages === "dorms") {
            return <Dorms roomsData={this.state.roomsData} />;
          } else if (pages === "category") {
            return <Category />;
          } else if (pages === "dormsadd") {
            return <DormsAdd id_user={this.state.userProfile.id} />;
          } else if (pages === "changeimg") {
            return <ChangeImg roomsData={this.state.roomsData} query={query} />;
          } else if (pages === "profile") {
            return <Profile userProfile={this.state.userProfile} />;
          } else if (pages === "booking") {
            return <Booking />;
          } else {
            return <Error404 />;
          }
        })}
      </div>
    );
  }
}

export default Admin;
