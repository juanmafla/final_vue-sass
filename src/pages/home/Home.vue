<template>
  <section class="home">
    <img class="bg-img" src="../../assets/img/bg-circle.png" />
    <img class="bg-img-s" src="../../assets/img/bg-circle-s.png" />

    <div class="row1">
      <div class="container">
        <div class="left-div">
          <h1>Fast & Effective Delivery Services.</h1>
          <p>
            Non Stop Logistics Ltd focuses on providing The most professional ​Service for parcel delivery in the UK &
            Europe. Our priority is the Safety and security of every parcel, we handle all our deliveries with care
            whilst trying to stay ahead of the curve using innovative technology that helps us to provide efficiency
            with every delivery.
          </p>
          <button>Login to My Account</button>
        </div>
        <div class='embed-container'>
          <iframe src='https://www.youtube.com/embed/PzWF8piv8y4' frameborder='0' allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="rowmob">
      <div class="container">
        <h2>Delivery on Demand</h2>
        <p>
          Check out the video below for a quick introduction on how to book a delivery with us.
        </p>

        <div class='embed-container'>
          <iframe src='https://www.youtube.com/embed/PzWF8piv8y4' frameborder='0' allowfullscreen></iframe>
        </div>

        <button>Sign up / Login</button>
      </div>
    </div>

    <div class="row-2-1">
      <div class="carousel" data-flickity='{ "wrapAround": true }'>
        <div class="carousel-cell">
          <div class="col1">
            <h1>
              Same Day<br />
              <span>Delivery</span>
            </h1>
            <p>
              Same Day Delivery Service Whatever the size of your parcel Small or Large we'll be there to deliver it
              same day!
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="col1">
            <h1>
              Multi Drop<br />
              <span>Delivery</span>
            </h1>
            <p>
             we’ll delivery up to 50 parcels within a 25 mile radius.
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="col1">
            <h1>
              Secure<br />
              <span>Delivery</span>
            </h1>
            <p>
             We offer a Secure package service For any parcels that require special handling and a first-class service.
            </p>
          </div>
        </div>
      </div>

      <div class="btn-wrap">
        <button>Find Out More</button>
      </div>


    </div>

    <div class="row2">
      <h2>Our Services</h2>
      <div class="services-tabs">
        <div class="col1">
          <figure>
            <img src="../../assets/img/icon-feather-truck.svg" />
          </figure>
          <h1>
            Same Day<br />
            Delivery
          </h1>
          <p>
            Same Day Delivery Service Whatever the size of your parcel Small or Large we'll be there to deliver it same
            day!
          </p>
        </div>
        <div class="col1">
          <figure>
            <img src="../../assets/img/icon-feather-package.svg" />
          </figure>
          <h1>
            Multi drop<br />
            Delivery
          </h1>
          <p>
           we’ll delivery up to 50 parcels within a 25 mile radius.
          </p>
        </div>
        <div class="col1">
          <figure>
            <img src="../../assets/img/icon-map-jewelry-store.svg" />
          </figure>
          <h1>
            Secure<br />
            Delivery
          </h1>
          <p>
            We offer a Secure package service For any parcels that require special handling and a first-class service.
          </p>
        </div>
        <div class="col1">
          <figure>
            <img src="../../assets/img/icon-awesome-euro-sign.svg" />
          </figure>
          <h1>
            European<br />
            Delivery
          </h1>
          <p>
           Need a parcel Delivered to or from Europe contact us.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const plugin = document.createElement('script');
    plugin.setAttribute('src', 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js');
    plugin.async = true;
    document.head.appendChild(plugin);
  },
};
</script>
