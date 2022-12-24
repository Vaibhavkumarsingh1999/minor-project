import React from 'react'

function productdetails() {
  return (
    <div>
        <body>

<section id="header">
    <h3>PU-Charity Foundation</h3>
  
    <div>
        <ul id="navbar">
        <li><a href="index.js">Home</a></li>
                <li><a href="shop.js">Shop</a></li>
                <li><a class="active" href="blog.js">Blog</a></li>
                <li><a href="about.js">About</a></li>
                <li><a href="contact.js">Contact</a></li>
            {/* <!-- <li id="lg-bag"><a href="cart.html"><i class="far fa-shopping-bag"></i></a></li> --> */}
            <a href="#" id="close"><i class="far fa-times"></i></a>
        </ul>
    </div>
    <div id="mobile">
        <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
        <i id="bar" class="fas fa-outdent"></i>
    </div>
</section>

<section id="prodetails" class="section-p1">
    <div class="single-pro-image">
        <img src="img/products/f1.jpg" width="100%" id="MainImg" alt=""/>

        <div class="small-img-group">
            <div class="small-img-col">
                <img src="img/products/f1.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="img/products/f2.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="img/products/f3.jpg" width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src="img/products/f4.jpg" width="100%" class="small-img" alt=""/>
            </div>
        </div>
    </div>

    <div class="single-pro-details">
        <h4>Summer Shirt</h4>
        <h6>Utkarsh pal</h6>
        <h6>8400293053</h6>
        <h6>House No 310 Sector 38B chandigarh</h6>
        <select>
          <option> Size available</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
      </select>
      
        <button class="normal">Confirm Product</button>
        <h4>Product Details</h4>
        <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
    </div>
</section>

<section id="product1" class="section-p1">
    <h2>Products </h2>
    <p>Summer Cloths</p>
    <div class="pro-container">
        <div class="pro">
            <img src="img/products/n1.jpg" alt=""/>
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
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
        <div class="pro">
            <img src="img/products/n2.jpg" alt=""/>
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
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
        <div class="pro">
            <img src="img/products/n3.jpg" alt=""/>
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
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
        <div class="pro">
            <img src="img/products/n4.jpg" alt=""/>
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
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>

    </div>
</section>

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

<footer class="section-p1">
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
    <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play </p>
        <div class="row">
            <img src="img/pay/app.jpg" alt=""/>
            <img src="img/pay/play.jpg" alt=""/>
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
  )
}

export default productdetails