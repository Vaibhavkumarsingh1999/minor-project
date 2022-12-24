import React from 'react'
import './App.css';
import './style.css'

function Footer() {
  return (
    <div>
         <section id="newsletter" class="section-m1 section-p1">
        <div class="newstext">
            <h4>Sign Up For latest News </h4>
            <p>Get E-mail updates about our latest products </p>
        </div>
        <div class="form">
            <input type="text" name="" placeholder="Your email address" id=""/>
            <button class="normal">Sign Up</button>
        </div>
    </section>
    <div> <footer class="section-p1">
         

    <div class="col">
        <h3>PU-Charity Foundation</h3>
        <h4>Contact</h4>
        <p><strong>Address:</strong> 3252 sector 23d chandigarh</p>
        <p><strong>Phone:</strong> +918400293053//  +919893873944</p>
        <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
        <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest-p"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
    </div>
    <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
       
        <a href="#">My Wishlist</a>
        
        <a href="#">Help</a>
    </div>
    <div class = "col install" >
        <h4>Install App</h4>
        <p>From App Store or Google Play </p>
        <div class="row">
            <img src="img/pay/app.jpg" alt=""/>
            <img src="img/pay/play.jpg" alt=""/>
        </div>
        
        
    </div>

   
</footer>
</div>
</div>
  )
}

export default Footer