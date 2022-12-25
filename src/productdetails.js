import React from "react";
import { useLocation } from "react-router-dom";

export const productdetailsarray = [
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
    imgUrl: require("./img/products/f2.jpg"),
  },
  {
    type: "Shirt",
    name: "Vaibhav",
    contact: "9898453848",
    address: "310 SECTOR 7D CHANDIGARH",
    size: "XL",
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
    imgUrl: require("./img/products/f1.jpg"),
  },
  {
    type: "Jacket",
    name: "Gaurav",
    contact: "998459459",
    address: "3257SECTOR 23D CHANDIGARH",
    size: "XLL",
    imgUrl: require("./img/products/f3.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "Shirt",
    name: "BALKAR",
    contact: "997874859",
    address: "3306 SECTOR 15D CHANDIGARH",
    size: "M",
    imgUrl: require("./img/products/f4.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "JACKET",
    name: "KUSHI",
    contact: "975757978",
    address: "3252 SECTOR 23D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/f5.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/f6.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/f7.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/f8.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n1.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n2.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n3.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n4.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n5.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n6.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n7.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
  {
    type: "T-Shirt",
    name: "Vanshu",
    contact: "98984594859",
    address: "312 SECTOR 37D CHANDIGARH",
    size: "XL",
    imgUrl: require("./img/products/n8.jpg"),
    discription:
      " The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 ozper inch fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle   collar, and available in a range of colors it offers it all in the ultimate head-turning package.",
  },
];

function Productdetails() {
  const location = useLocation();
  return (
    <div>
      <body>
        <section id="prodetails" class="section-p1">
          <div class="single-pro-image">
            <img
              src={location.state.product.imgUrl}
              width="100%"
              id="MainImg"
              alt="sad"
            />

            <div class="small-img-group">
              <div class="small-img-col">
                <img
                  src="img/products/f1.jpg"
                  width="100%"
                  class="small-img"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="img/products/f2.jpg"
                  width="100%"
                  class="small-img"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="img/products/f3.jpg"
                  width="100%"
                  class="small-img"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="img/products/f4.jpg"
                  width="100%"
                  class="small-img"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="single-pro-details">
            <h4>{location.state.product.type}</h4>
            <h6>{location.state.product.name}</h6>
            <h6>{location.state.product.contact}</h6>
            <h6>{location.state.product.address}</h6>
            <h6>{location.state.product.size}</h6>

            <h4>Product Details</h4>
            <span>{location.state.product.discription}</span>
          </div>
        </section>

        <section id="product1" class="section-p1">
          <h2>Products </h2>
          <p>Summer Cloths</p>
          <div class="pro-container">
            <div class="pro">
              <img src="img/products/n1.jpg" alt="" />
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
              <img src="img/products/n2.jpg" alt="" />
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
              <img src="img/products/n3.jpg" alt="" />
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
              <img src="img/products/n4.jpg" alt="" />
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
              <img src="img/pay/app.jpg" alt="" />
              <img src="img/pay/play.jpg" alt="" />
            </div>
          </div>
        </footer>

        {/* <script>
    var MainImg = document.getElementById("MainImg");
    var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function() {
        MainImg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function() {
        MainImg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function() {
        MainImg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function() {
        MainImg.src = smallimg[3].src;
    }
</script> */}

        <script src="script.js"></script>
      </body>
    </div>
  );
}

export default Productdetails;
