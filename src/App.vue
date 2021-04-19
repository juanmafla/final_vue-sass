<template>
  <div id="app">
    <div id="menu" class="mob-menu hidden fade-in">
      <div class="row1">
        <img class="logo-brand" src="./assets/img/logo.png" />
        <img id="close-btn" class="menu-btn" src="./assets/img/Icon feather-menu-black.png" />
      </div>
      <ul class="row2">
        <router-link class="menu-item" :class="{ active: $route.name === 'home' }" tag="li" to="/" exact
          >Home</router-link
        >
        <router-link class="menu-item" :class="{ active: $route.name === 'account' }" tag="li" to="/account" exact
          >My Account</router-link
        >
        <router-link class="menu-item" :class="{ active: $route.name === 'services' }" tag="li" to="/services" exact
          >Services</router-link
        >
        <a href="#contact" tag="li" class="menu-item">Contact Us</a>
      </ul>
      <div class="footer">
        <div class="row-1">
          <a href="#"><img src="./assets/img/insta.png" /></a>
          <a href="#"><img src="./assets/img/fb.png" /></a>
          <a href="#"><img src="./assets/img/linkedin.png" /></a>
          <a href="#"><img src="./assets/img/whatsapp.png" /></a>
        </div>
        <div class="row-2">
          <p>© 2021 by Non Stop Logistics Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>

    <div class="header">
      <img class="bg-img" src="./assets/img/bg-circle.png" />
      <img class="bg-img-s" src="./assets/img/bg-circle-s.png" />
      <div class="container">
        <figure class="logo">
          <img src="./assets/img/logo.png" />
        </figure>

        <div class="tabs">
          <router-link class="tab" :class="{ active: $route.name === 'home' }" to="/" exact>Home</router-link>
          <router-link class="tab" :class="{ active: $route.name === 'services' }" to="/services" exact
            >Services</router-link
          >
          <router-link class="tab" :class="{ active: $route.name === 'delivery' }" to="/delivery" exact
            >Delivery On Demand</router-link
          >
          <a href="#contact" class="tab">Contact Us</a>
          <router-link class="tab" :class="{ active: $route.name === 'account' }" to="/account" exact
            >My Account</router-link
          >
        </div>

        <img id="menu-btn" class="menu-btn" src="./assets/img/Icon feather-menu.png" />
      </div>
    </div>

    <router-view class="section" />

    <div class="footer">
      <div class="container" id="contact">
      <figure>
        <img src="./assets/img/van_mockup.svg" />
      </figure>
        <h1>Contact Us</h1>

        <div class="row1">
          <div class="fname-input input-wrapper">
            <label for="fname">Full Name</label>
            <input id="fname" type="text" value="" name="fname" />
          </div>
          <div class="phone-input input-wrapper">
            <label for="phone">Phone Number</label>
            <input id="phone" type="text" value="" name="phone" />
          </div>
          <div class="position-input input-wrapper">
            <span class="error-span">*Essential</span>
            <label for="position">Company Position</label>
            <input id="position" type="text" value="" name="position" />
          </div>
          <div class="email-input input-wrapper">
            <label for="email">Email Address</label>
            <input id="email" type="email" value="" name="email" />
          </div>
          <div class="company-input input-wrapper">
            <label for="company" class="company">Company</label>
            <input id="company" type="text" value="" name="company" />
          </div>
          <div class="service-input input-wrapper">
            <label>Type of Service</label>
            <select>
              <option value="Same Day Delivery Services">Same Day Delivery Services</option>
              <option value="Multi Drop Delivery Services">Multi Drop Delivery Services</option>
              <option value="Secure Delivery Services">Secure Delivery Services</option>
              <option value="European Delivery Services">European Delivery Services</option>
            </select>
          </div>
        </div>

        <div class="row2  input-wrapper">
          <h4>Describe Your Delivery Details</h4>
          <textarea class="para" maxlength="200">
          </textarea>
          <p class="limit">200 words max</p>
        </div>

        <div class="btn-wrap">
          <button class="touch-btn">Get in Touch</button>
        </div>
      </div>

      <div class="footer-content">
        <div class="col1">
          <p>© 2021 by Non Stop Logistics <router-link class="tab" :class="{ active: $route.name === 'terms' }" to="/terms" exact
            >Terms & Conditions</router-link
          > | <router-link class="tab" :class="{ active: $route.name === 'privacy' }" to="/privacy" exact
            >Privacy Policy</router-link
          ></p>
        </div>
        <div class="col2">
          <a href="#"><img src="./assets/img/icon-awesome-instagram.svg" /></a>
          <a href="#"><img src="./assets/img/icon-awesome-facebook-f.svg" /></a>
          <a href="#"><img src="./assets/img/icon-awesome-linkedin.svg" /></a>
          <a href="#"><img src="./assets/img/icon-awesome-whatsapp.svg" /></a>
        </div>
        <div class="col3">
          <span class="left-span">Email Us: Info@nonstoplogistics.co.uk</span>
          <span class="right-span">Telephone: 0121 232 4668</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
