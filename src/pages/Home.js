import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>


      <div className="headerContainer">
        <h1> Mahdiyning Pizzeriasi </h1>
        <p> ENG MAZALI TA'MGA EGA PITSA</p>
        <Link to="/menu">
          <button> HOZIR BUYURTMA BERING </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;