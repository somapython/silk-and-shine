import "./Navbar.scss";
import { Heart, User, ShoppingCart, Search } from "lucide-react";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
import HelpModal from "../helpModal/HelpModal";
import AuthModal from "../authModal/AuthModal";

const Navbar = () => {
    const [showHelp, setShowHelp] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span>↓ Delivering across India</span>
          <span>Free shipping above ₹999</span>
          <span>100% Authentic Handloom</span>
        </div>
        <div className="top-bar-right">
          <a href="/">Track Order</a>
          {/* <a href="/">Help</a> */}
          <button
            className="help-link"
            onClick={() => setShowHelp(true)}
          >
            Help
          </button>
          {/* <a href="/">Sign In</a> */}
          <button
            className="help-link"
            onClick={() => setShowAuth(true)}
          >
            Sign In
          </button>
        </div>
        <HelpModal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
      <AuthModal
        isOpen={showAuth}
        onClose={() =>
          setShowAuth(false)
        }
      />

      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left - Logo */}
          <div className="navbar-left">
            <div className="logo">
              <img src={logo} alt="Vastravilas" />
            </div>
          </div>

          {/* Center - Search */}
          <div className="navbar-center">
            <div className="search-bar">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search sarees, fabric, occasion..."
              />
            </div>
          </div>

          {/* Right - Icons */}
          <div className="navbar-right">
            <div className="icon-group">
              <button className="icon-btn" title="Wishlist">
                <Heart size={20} />
              </button>
              <p className="icon-label">WISHLIST</p>
            </div>
            <div className="icon-group">
              <button className="icon-btn" title="Account">
                <User size={20} />
              </button>
              <p className="icon-label">ACCOUNT</p>
            </div>
            <div className="icon-group cart">
              <button className="icon-btn" title="Cart">
                <ShoppingCart size={20} />
              </button>
              <p className="icon-label">CART</p>
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-container">
          <div className="menu">
            <a href="/">All Sarees</a>
            <a href="/">Silk Sarees</a>
            <a href="/">Kanjivaram</a>
            <a href="/">Banarasi</a>
            <a href="/">Cotton</a>
            <a href="/">Designer</a>
            <a href="/">Blouse Fabric</a>
          </div>
          <button className="sale-btn">♥ Sale</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;