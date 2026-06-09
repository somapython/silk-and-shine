import { useState,useEffect } from "react";
import { getCategories } from "../../services/categoryService";
import "./ShopByCategory.scss";

const ShopByCategory = () => {
  const [activeCategory,setActiveCategory] = useState<number | null>(null);

  // const categories = [
  //   { id: "pureSilk", label: "Pure Silk", icon: "✦" },
  //   { id: "kanjivaram", label: "Kanjivaram", icon: "✤" },
  //   { id: "banarasi", label: "Banarasi", icon: "◯" },
  //   { id: "cotton", label: "Cotton", icon: "#" },
  //   { id: "bridal", label: "Bridal", icon: "♥" },
  //   { id: "casual", label: "Casual", icon: "✧" },
  // ];

          const [categories, setCategories] = useState<any[]>([]);

        useEffect(() => {

        loadCategories();

        },[]);

        const loadCategories =
        async() =>
        {
        const data =
        await getCategories();

        setCategories(data);
        };

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
          {categories.map((category:any) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
               📂 {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
