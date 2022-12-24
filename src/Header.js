import React from 'react'
import './App.css';
import './style.css'

function header() {
  return (
    <div>    <section id="header">
    <h3>PU-Charity Foundation</h3>
    <div>
        <ul id="navbar">
        <li><a href="index.js">Home</a></li>
                <li><a href="shop.js">Shop</a></li>
                <li><a class="active" href="blog.js">Blog</a></li>
                <li><a href="about.js">About</a></li>
                <li><a href="contact.js">Contact</a></li>
            {/* <!-- <li id="lg-bag"><a href="cart.html"><i class="far fa-shopping-bag"></i></a></li> --> */}
            <a id="close" href="#"><i class="far fa-times"></i></a>
        </ul>
    </div>
    <div id="mobile">
        <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
        <i id="bar" class="fas fa-outdent"></i>
    </div>
</section></div>
  )
}

export default header