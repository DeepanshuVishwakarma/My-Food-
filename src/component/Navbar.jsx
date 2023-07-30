import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div>
        <NavLink to="/">
          <div>
            <img src="https://e7.pngegg.com/pngimages/805/787/png-clipart-shopping-bags-trolleys-logo-tote-bag-paper-graphic-design-bag-luggage-bags-text-thumbnail.png"></img>
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
