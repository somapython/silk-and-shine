import "./WhatsappButton.scss";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {

  return (
    <a
      href="https://wa.me/919999999999"
      className="whatsapp-btn"
      target="_blank"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;