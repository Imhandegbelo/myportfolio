import React, { Component } from "react";
import "./Testimonials.css";
import avatar from "../../assets/img/avatar.png"

class Testimonials extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid text-center testimonial">
          <h1>Testimonials</h1>
          <p>People I've worked with have said some nice things...</p>
          <img className="avatar" src={avatar} alt="" />
          <div className="w60">
            <q>George is an awesome guy to work with. Clear on his terms and delivers right on time. Highly recommended
              I'll certainly be contacting him again soon</q>
          </div>
          <div className="citer">
            <cite>John Ogenyi</cite>
          </div>
        </div>
      </div>
    )
  }
};

export default Testimonials;