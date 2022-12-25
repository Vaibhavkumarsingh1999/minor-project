import React from "react";

function About() {
  return (
    <div>
      <section id="page-header" class="about-header">
        <h2>#KnowUs </h2>

        <p>Lorem ipsum dolor sit amet, consectetur </p>
      </section>

      <section id="about-head" class="section-p1">
        <img src="img/about/a6.jpg" alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis auteirure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section id="feature" class="section-p1">
        <div class="fe-box">
          <img src="img/features/f1.png" alt="" />
          <h6>Review product</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f2.png" alt="" />
          <h6>Confirm Order</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f3.png" alt="" />
          <h6>Save </h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f4.png" alt="" />
          <h6>Promote</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f5.png" alt="" />
          <h6>Happy other</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f6.png" alt="" />
          <h6>Support</h6>
        </div>
      </section>

      <section id="newsletter" class="section-m1 section-p1">
        <div class="newstext">
          <h4>Sign Up For latest News </h4>
          <p>Get E-mail updates about our latest products </p>
        </div>
        <div class="form">
          <input type="text" name="" placeholder="Your email address" id="" />
          <button class="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default About;
