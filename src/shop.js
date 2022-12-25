import React from "react";

function Shop() {
  return (
    <div>
      <body>
        {/* <section id="header">
          <h3>PU-Charity Foundation</h3>

          <div>
            <ul id="navbar">
              <li>
                <a href="index.js">Home</a>
              </li>
              <li>
                <a href="shop.js">Shop</a>
              </li>
              <li>
                <a class="active" href="blog.js">
                  Blog
                </a>
              </li>
              <li>
                <a href="about.js">About</a>
              </li>
              <li>
                <a href="contact.js">Contact</a>
              </li>

              <a href="#" id="close">
                <i class="far fa-times"></i>
              </a>
            </ul>
          </div>
          <div id="mobile">
            <a href="cart.html">
              <i class="far fa-shopping-bag"></i>
            </a>
            <i id="bar" class="fas fa-outdent"></i>
          </div>
        </section> */}

        <section id="page-header">
          <h2>#Clothes for a cause</h2>

          <p>Just A Little Help Can Make Their Hearts Happier</p>
        </section>

        <section id="product1" class="section-p1">
          <div class="pro-container">
            <div class="pro" onclick="window.location.href='sproduct.html';">
              <img src={`${require("./img/products/f1.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/f2.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/f3.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/f4.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/f5.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/f6.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/f7.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/f8.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>

            <div class="pro">
              <img src={`${require("./img/products/n1.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/n2.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/n3.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/n4.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/n5.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/n6.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/n7.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src={`${require("./img/products/n8.jpg")}`} alt="" />
              <div class="des">
                <span>Harsh</span>
                <h5> T-Shirts</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>8401293053</h4>
              </div>
              <a href="#">
                <i class="fal fa-shopping-cart cart"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="pagination" class="section-p1">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">
            <i class="fal fa-long-arrow-alt-right"></i>
          </a>
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
              <img src={`${require("./img/pay/play.jpg")}`} alt="" />
              <img src={`${require("./img/pay/play.jpg")}`} alt="" />
            </div>
          </div>
        </footer>

        <script src="script.js"></script>
      </body>
    </div>
  );
}

export default Shop;

function ProductCard({ product }) {
  return (
    <div class="pro" onclick="window.location.href='sproduct.html';">
      <img src={`${require(product.imgUrl)}`} alt="" />
      <div class="des">
        <span>{product.name}</span>
        <h5> {product.type}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>{product.contact}</h4>
      </div>
      <a href="#">
        <i class="fal fa-shopping-cart cart"></i>
      </a>
    </div>
  );
}
