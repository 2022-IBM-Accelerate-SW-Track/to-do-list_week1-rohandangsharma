import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpg";


export default class About extends Component {
  render() {
    return (
      <div>

        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile}
              alt="Profile Pic"
            ></img>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <div className="name_title">Rohan Sharma</div>
            <div className="brief_description">
              Hi! I'm Rohan and I'm a Information Science Major at Cornell
              University. I am super excited to be part of IBM
              Accelerate! I love to code and am happy to be learning as a part
              of the Software Track.
            </div>
          </div>
        </div>
      </div>
    )
  }
}