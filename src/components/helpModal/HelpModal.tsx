import "./HelpModal.scss";
import {
  X,
  Phone,
  Mail,
  MessageCircle,
  Truck,
  RefreshCcw
} from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal = ({
  isOpen,
  onClose
}: Props) => {

  if (!isOpen) return null;

  return (
    <div className="help-overlay">

      <div className="help-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2>How Can We Help You?</h2>

        <p className="subtitle">
          Welcome to Silk & Shine Support
        </p>

        <div className="support-grid">

          <div className="support-card">
            <Phone />
            <h4>Call Us</h4>
            <p>+91 9876543210</p>
          </div>

          <div className="support-card">
            <Mail />
            <h4>Email</h4>
            <p>support@silkandshine.com</p>
          </div>

          <div className="support-card">
            <MessageCircle />
            <h4>WhatsApp</h4>
            <p>Live Chat Support</p>
          </div>

          <div className="support-card">
            <Truck />
            <h4>Track Order</h4>
            <p>Check delivery status</p>
          </div>

          <div className="support-card">
            <RefreshCcw />
            <h4>Returns</h4>
            <p>Easy Return Policy</p>
          </div>

        </div>

        <div className="faq-section">

          <h3>Frequently Asked Questions</h3>

          <div className="faq-item">
            <h4>How long is delivery?</h4>
            <p>Usually 3-7 business days.</p>
          </div>

          <div className="faq-item">
            <h4>Do you provide COD?</h4>
            <p>Yes, Cash On Delivery available.</p>
          </div>

          <div className="faq-item">
            <h4>Can I return products?</h4>
            <p>Returns accepted within 7 days.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HelpModal;