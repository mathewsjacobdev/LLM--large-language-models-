import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";

const main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img className="user_icon" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello. User</span>
          </p>
          <p>How can i help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautyful places to seen on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Breifly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding Activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter a prompt here" />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses.</p>
        </div>


      </div>
    </div>
  );
};

export default main;