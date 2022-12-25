import React from "react";

function Contact() {
  return (
    <div>
      <section id="page-header" class="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" class="section-p1">
        <div class="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i class="fal fa-map"></i>
              <p>3252 sector 23d chandigarh </p>
            </li>
            <li>
              <i class="far fa-envelope"></i>
              <p>vaibhavsinghvns11@example.com </p>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              <p>prashant1234@example.com </p>
            </li>
            <li>
              <i class="far fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16.pm </p>
            </li>
          </div>
        </div>

        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27437.637512402624!2d76.74983619149602!3d30.72670137489464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedae2ead8189%3A0xbd00b1101766ea0a!2sChandigarh%2C%20160022!5e0!3m2!1sen!2sin!4v1672006127732!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <div id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We want your support </h2>
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="text" name="" id="" placeholder="E-mail" />
          <input type="text" name="" id="" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button class="normal">Submit</button>
        </form>
        {/* 
        <div class="people">
            <div>
                <img src="img/pro.png" alt=""/>
                <p><span>Uttkarsh Pal </span>Graphic and style developer <br> Phone: +91123456789 <br> Email: Uttkarshpal123@example.com</p>
            </div>
            <div>
                <img src="img/pro.png" alt=""/>
                <p><span>Parshant bhagal</span> Frontend developer <br> Phone: +919876543210 <br> Email: prashantbhagalk123@example.com</p>
            </div>
            <div>
                <img src="img/pro.png" alt=""/>
                <p><span>Vaibhav kumar singh</span> Senior Developer <br> Phone: +918400293053 <br> Email: vaibhavsinghvns11@example.com</p>
            </div>
        </div> */}
      </div>

      {/* <section id="newsletter" class="section-m1 section-p1">
        <div class="newstext">
          <h4>Sign Up For latest News </h4>
          <p>Get E-mail updates about our latest products </p>
        </div>
        <div class="form">
          <input type="text" name="" placeholder="Your email address" id="" />
          <button class="normal">Sign Up</button>
        </div>
      </section> */}
{/* 
      <footer class="section-p1">
        <div class="col">
          <h3>PU-Charity Foundation</h3>
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> 3252 sector 23d chandigarh
          </p>
          <p>
            <strong>Phone:</strong> +918400293053// +919893873944
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>
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
        <div class="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play </p>
          <div class="row">
            <img src="img/pay/app.jpg" alt="" />
            <img src="img/pay/play.jpg" alt="" />
          </div>
        </div>
      </footer> */}

      <script src="script.js"></script>
    </div>
  );
}

export default Contact;
