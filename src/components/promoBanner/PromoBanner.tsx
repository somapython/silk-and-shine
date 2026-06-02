import "./PromoBanner.scss";

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <div className="promo-text">
          <h3>Festive Season Sale — Up to 40% off</h3>
          <p>On select Banarasi & Kanjivaram weaves. Limited stock.</p>
        </div>
        <div className="promo-code">
          <span>USE: FEST40</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
