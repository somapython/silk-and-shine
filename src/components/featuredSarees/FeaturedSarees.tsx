import { useState } from "react";
import "./FeaturedSarees.scss";
import saree1 from "../../assets/images/saree1.jpg";
import saree2 from "../../assets/images/saree2.jpg";
import saree3 from "../../assets/images/saree3.jpg";
import saree4 from "../../assets/images/saree4.jpg";
import saree5 from "../../assets/images/saree5.jpg";
import saree6 from "../../assets/images/saree6.jpg";

const FeaturedSarees = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Kanjivaram Pure Silk",
      origin: "Kanchipuram, Tamil Nadu",
      price: 8499,
      originalPrice: 11000,
      type: "SILK",
      bgColor: "#FEF5EE",
      textColor: "#C9A961",
      image: saree1,
    },
    {
      id: 2,
      name: "Banarasi Zari Weave",
      origin: "Varanasi, Uttar Pradesh",
      price: 6200,
      originalPrice: 8500,
      type: "BANARASI",
      bgColor: "#F0E8F5",
      textColor: "#9D7BC4",
      image: saree2,
    },
    {
      id: 3,
      name: "Chanderi Silk Cotton",
      origin: "Chanderi, Madhya Pradesh",
      price: 3800,
      originalPrice: null,
      type: "CHANDERI",
      bgColor: "#EEF7F0",
      textColor: "#7DB896",
      image: saree3,
    },
    {
      id: 4,
      name: "Maheshwari Cotton Silk",
      origin: "Madhya Pradesh",
      price: 4500,
      originalPrice: 6000,
      type: "SILK",
      bgColor: "#FEF5EE",
      textColor: "#C9A961",
      image: saree4,
    },
    {
      id: 5,
      name: "Tissue Saree Gold",
      origin: "Tamil Nadu",
      price: 5200,
      originalPrice: 7500,
      type: "BANARASI",
      bgColor: "#F0E8F5",
      textColor: "#9D7BC4",
      image: saree5,
    },
    {
      id: 6,
      name: "Paithani Pure Silk",
      origin: "Maharashtra",
      price: 9800,
      originalPrice: 13000,
      type: "CHANDERI",
      bgColor: "#EEF7F0",
      textColor: "#7DB896",
      image: saree6,
    },
  ]);

  return (
    <div className="featured-sarees">
      <div className="featured-container">
        <div className="section-header">
          <h2>Trending Collection</h2>
          <a href="/" className="see-all">
            See all →
          </a>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} className="saree-image" />
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-origin">{product.origin}</p>

                <div className="product-footer">
                  <div className="price-section">
                    <span className="current-price">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <button className="add-btn">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSarees;
