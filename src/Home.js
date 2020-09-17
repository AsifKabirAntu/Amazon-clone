import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="121212"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
            price={38.88}
            image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="232323"
            title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
            price={599.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71VoLjTu8OL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="343434"
            title="Apple iPhone 11 Pro Max (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={1099.0}
            image="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
            rating={5}
          />
          <Product
            id="454545"
            title="Apple iPhone XR (64GB, Black) [Locked] + Carrier Subscription"
            price={399.0}
            image="https://m.media-amazon.com/images/I/519KIlHA2wL.jpg"
            rating={4}
          />
          <Product
            id="565656"
            title="Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
            price={429.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="676767"
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
            price={949.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
