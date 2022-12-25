import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./style.css";

function header() {
  return (
    <div>
      {" "}
      <section id="header">
        <h3>PU-Charity Foundation</h3>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link class="active" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <!-- <li id="lg-bag"><Link to="cart.html"><i class="far fa-shopping-bag"></i></Link></li> --> */}
            <Link id="close" to="#">
              <i class="far fa-times"></i>
            </Link>
          </ul>
        </div>
        <div id="mobile">
          <Link to="cart.html">
            <i class="far fa-shopping-bag"></i>
          </Link>
          <i id="bar" class="fas fa-outdent"></i>
        </div>
      </section>
    </div>
  );
}

export default header;
