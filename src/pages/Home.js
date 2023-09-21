import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizzaLogo1.PNG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Delicious Elizabeth Pizza </h1>
        <p> TASTE AND TELL PIZZA</p>
      {/* Comment  <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>  */}
      </div>
    </div>
  );
}

export default Home;
