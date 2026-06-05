import "./Navbar.scss";
import { Heart, User, ShoppingCart, Search, Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HelpModal from "../helpModal/HelpModal";
import AuthModal from "../authModal/AuthModal";
import { getCart } from "../../services/cartService";

const Navbar = () => {
    const [showHelp, setShowHelp] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartCount,setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() =>
      {
      loadCart();
      }, []);

    const loadCart = async () => {
        try {
        const data =
        await getCart();
        setCartCount( data.length);
      }
        catch{}
    };

    const user = JSON.parse( localStorage.getItem("user") || "null");

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.reload();
    };
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
          <button
            className="help-link"
            onClick={() => setShowHelp(true)}
          >
            Help
          </button>
          {!user && (
          <button
            className="help-link"
            onClick={() => setShowAuth(true)}
          >
            Sign In
          </button>
          )}
          {user && (
              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            )}
          {/* <div className="icon-group">
            <button
              className="icon-btn"
              title="Account"
              onClick={() => {
                if (!user) {
                  setShowAuth(true);
                }
              }}
            >
              <User size={20} />
            </button>

            <p className="icon-label">
              {user ? user.fullName : "ACCOUNT"}
            </p> */}

            {/* {user && (
              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            )} */}
           
          {/* </div> */}
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
            {
              user?.role === "Admin" && (

              <div className="icon-group">

              <button
              className="icon-btn"
              onClick={() =>
              navigate("/admin")
              }
              >
              ⚙️
              </button>

              <p className="icon-label">
              ADMIN
              </p>

              </div>

              )
              }
            <div className="icon-group" onClick={() => navigate("/wishlist") }>
              <button className="icon-btn" title="Wishlist">
                <Heart size={20} />
              </button>
              <p className="icon-label">WISHLIST</p>
            </div>
            <div className="icon-group account-group" onClick={() =>navigate("/profile")}>
              <button
                className="icon-btn"
                onClick={() => {
                  if (!user) {
                    setShowAuth(true);
                  }
                }}
              >
                <User size={20} />
              </button>

              <p className="icon-label">
                {user ? user.fullName : "ACCOUNT"}
              </p>

              {/* {user && (
                <div className="user-dropdown">
                  <button className="user-name">
                    My Account
                  </button>

                  <div className="dropdown-menu">
                    <button onClick={() => navigate("/profile")}>Profile</button>
                    <button onClick={() => navigate("/wishlist") }>Wishlist</button>
                    <button>Orders</button>
                    <button onClick={logout}>
                      Logout
                    </button>
                  </div>
                </div>
              )} */}
            </div>
            <div className="icon-group cart" onClick={() => navigate("/cart")}>
              <button className="icon-btn" title="Cart">
                <ShoppingCart  size={20} />
              </button>
              <p className="icon-label">CART</p>
              <span className="cart-count"> {cartCount} </span>
            </div>

            {/* Hamburger Menu */}
            <button 
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Bar */}
      <div className={`menu-bar ${mobileMenuOpen ? 'active' : ''}`}>
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