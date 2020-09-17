import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateVlaue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateVlaue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1258835_1326209_US_AW_us_warehouse_deals_us_en_3313893_1500x120_en_US.jpg"
          alt=""
        />

        <div>
          <h3> Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
