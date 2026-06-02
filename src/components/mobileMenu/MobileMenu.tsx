import "./MobileMenu.scss";

import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaUser
} from "react-icons/fa";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">

      <div className="menu-item">
        <FaHome />
        <span>Home</span>
      </div>

      <div className="menu-item">
        <FaShoppingBag />
        <span>Shop</span>
      </div>

      <div className="menu-item">
        <FaHeart />
        <span>Wishlist</span>
      </div>

      <div className="menu-item">
        <FaUser />
        <span>Profile</span>
      </div>

    </div>
  );
};

export default MobileMenu;