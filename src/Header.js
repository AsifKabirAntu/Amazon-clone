import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateVlaue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateVlaue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />

        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__navOption">
            <span className="header__navOptionLineOne">
              Hello {user ? `${user?.email}` : "Guest"}
            </span>
            <span className="header__navOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Returns</span>
          <span className="header__navOptionLineTwo">& Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__navOptionBasket">
            <ShoppingBasketIcon />
            <span className="header__navOptionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
