import { useState } from "react";
import "./ShopByCategory.scss";

const ShopByCategory = () => {
  const [activeCategory, setActiveCategory] = useState("pureSilk");

  const categories = [
    { id: "pureSilk", label: "Pure Silk", icon: "✦" },
    { id: "kanjivaram", label: "Kanjivaram", icon: "✤" },
    { id: "banarasi", label: "Banarasi", icon: "◯" },
    { id: "cotton", label: "Cotton", icon: "#" },
    { id: "bridal", label: "Bridal", icon: "♥" },
    { id: "casual", label: "Casual", icon: "✧" },
  ];

  return (
    <div className="shop-category">
      <div className="category-container">
        <div className="category-header">
          <h2>Shop by category</h2>
          <a href="/" className="view-all">
            View all →
          </a>
        </div>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
