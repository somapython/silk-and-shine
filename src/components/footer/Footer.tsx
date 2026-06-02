import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CreditCard,
  Wallet
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-wrapper">
          {/* Left Section - Brand */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="logo-text">
                <div className="logo-main"> Silk & Shine</div>
                <div className="logo-sub">PREMIUM SAREES & JEWELLERY</div>
              </div>
            </div>
            <p className="brand-description">
              Bringing authentic Premium Sarees & Jewellery from India's finest weavers to your doorstep. 
              Sourced directly from artisans of Kanchipuram, Varanasi, Chanderi & more. Est. 2018, Pune.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com">
                <FaInstagram />
              </a>

              <a href="https://twitter.com">
                <FaXTwitter />
              </a>

              <a href="https://youtube.com">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="footer-section">
            <h4>SHOP</h4>
            <ul>
              <li><a href="/">Silk Sarees</a></li>
              <li><a href="/">Kanjivaram</a></li>
              <li><a href="/">Banarasi</a></li>
              <li><a href="/">Cotton Sarees</a></li>
              <li><a href="/">Bridal Collection</a></li>
              <li><a href="/">New Arrivals</a></li>
              <li><a href="/">Sale</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li><a href="/">Track My Order</a></li>
              <li><a href="/">Returns & Refunds</a></li>
              <li><a href="/">Size Guide</a></li>
              <li><a href="/">Care Instructions</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h4>CONTACT</h4>
            <div className="contact-item">
              <Phone size={18} />
                <a href="tel:+919876543210">
                    +91 98765 43210
                </a>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:hello@vastravilas.in">hello@vastravilas.in</a>
            </div>
            <div className="contact-item">
               <MapPin size={18} />
              <span>Wakad, Pune 411057</span>
            </div>
            <div className="contact-item whatsapp">
              <MessageCircle size={18} />
              <a href="https://wa.me/919876543210">WhatsApp Us</a>
            </div>
            <p className="contact-hours">Mon–Sat, 9am – 7pm</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            <p>© 2026 Silk & Shine. All rights reserved.</p>
          </div>

          <div className="footer-bottom-center">
            <a href="/">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="/">Terms of Use</a>
          </div>

          <div className="footer-bottom-right">
            <div className="payment-methods">
              {/* <span>UPI</span>
              <span>VISA</span>
              <span>MC</span>
              <span>RuPay</span>
              <span>GPay</span> */}
               <div className="payment-item">
                    <Wallet size={16} />
                    <span>UPI</span>
                </div>

                <div className="payment-item">
                    <CreditCard size={16} />
                    <span>Visa</span>
                </div>

                <div className="payment-item">
                    <CreditCard size={16} />
                    <span>MasterCard</span>
                </div>

                <div className="payment-item">
                    <CreditCard size={16} />
                    <span>RuPay</span>
                </div>

                <div className="payment-item">
                    <Wallet size={16} />
                    <span>GPay</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
