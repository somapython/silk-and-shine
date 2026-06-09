import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import {
 addToCart
}
from "../../services/cartService";
import { Link } from "react-router-dom";

import { addToWishlist } from "../../services/wishlistService";

import {
  Heart,
  ShoppingBag,
  Eye,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import saree1 from "../../assets/images/saree1.jpg";
import "./FeaturedSarees.scss";

const FeaturedSarees = () => {
   const [products, setProducts] = useState<any[]>([]);
   const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    try {

      const data =
        await getProducts();

      console.log("Products:", data);

      setProducts(data);

    } catch (error) {

      console.error(error);

    }
  };

    const handleWishlist = async(id:number) => {

      try {

        await addToWishlist(id);

        alert("Added To Wishlist");

      } catch {

        alert("Please Login First");

      }
    };

  // const [products] = useState([
  //   {
  //     id: 1,
  //     name: "Kanjivaram Pure Silk",
  //     origin: "Kanchipuram, Tamil Nadu",
  //     price: 8499,
  //     originalPrice: 11000,
  //     type: "SILK",
  //     bgColor: "#FEF5EE",
  //     textColor: "#C9A961",
  //     image: saree1,
  //   },
  //   {
  //     id: 2,
  //     name: "Banarasi Zari Weave",
  //     origin: "Varanasi, Uttar Pradesh",
  //     price: 6200,
  //     originalPrice: 8500,
  //     type: "BANARASI",
  //     bgColor: "#F0E8F5",
  //     textColor: "#9D7BC4",
  //     image: saree2,
  //   },
  //   {
  //     id: 3,
  //     name: "Chanderi Silk Cotton",
  //     origin: "Chanderi, Madhya Pradesh",
  //     price: 3800,
  //     originalPrice: null,
  //     type: "CHANDERI",
  //     bgColor: "#EEF7F0",
  //     textColor: "#7DB896",
  //     image: saree3,
  //   },
  //   {
  //     id: 4,
  //     name: "Maheshwari Cotton Silk",
  //     origin: "Madhya Pradesh",
  //     price: 4500,
  //     originalPrice: 6000,
  //     type: "SILK",
  //     bgColor: "#FEF5EE",
  //     textColor: "#C9A961",
  //     image: saree4,
  //   },
  //   {
  //     id: 5,
  //     name: "Tissue Saree Gold",
  //     origin: "Tamil Nadu",
  //     price: 5200,
  //     originalPrice: 7500,
  //     type: "BANARASI",
  //     bgColor: "#F0E8F5",
  //     textColor: "#9D7BC4",
  //     image: saree5,
  //   },
  //   {
  //     id: 6,
  //     name: "Paithani Pure Silk",
  //     origin: "Maharashtra",
  //     price: 9800,
  //     originalPrice: 13000,
  //     type: "CHANDERI",
  //     bgColor: "#EEF7F0",
  //     textColor: "#7DB896",
  //     image: saree6,
  //   },
  // ]);

  return (
    <div className="featured-sarees">
      <div className="featured-container">
        <div className="section-header">
          <h2>Trending Collection</h2>
          <Link to="/products" className="see-all"> See All → </Link>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <span className="discount-badge">
                    {Math.round(
                      (
                        (product.price * 1.2 - product.price)
                        /
                        (product.price * 1.2)
                      ) * 100
                      )}% OFF
                  </span>

                  <button
                    className="wishlist-btn"
                    onClick={() => handleWishlist(product.id)}
                  >
                    <Heart size={18}/>
                  </button>

                  <img
                    src={
                      product.imageUrl ||
                      saree1
                    }
                    alt={product.name}
                    className="saree-image"
                  />

                  <div className="hover-actions">

                    <button
                      onClick={() =>
                      navigate(
                        `/product/${product.id}`
                      )}
                    >
                      <Eye size={16}/>
                      View
                    </button>

                  </div>
              </div>

              <div className="product-info">
                <div className="rating">

                  <Star
                  size={14}
                  fill="currentColor"
                  />

                  <span>
                    {product.rating || 4.8}
                  </span>

                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-origin">{product.category}</p>

                <div className="product-footer">
                  <div className="price-section">

                    <span className="current-price">
                      ₹{product.price}
                    </span>

                    <span className="original-price">
                      ₹{Math.round(
                        product.price * 1.2
                      )}
                    </span>

                  </div>
                  <div className="card-buttons">

                    <button
                      className="view-btn"
                      onClick={() =>
                      navigate(
                        `/product/${product.id}`
                      )}
                    >
                      View Product
                    </button>

                    <button
                      className="add-btn"
                      onClick={async()=>{

                        await addToCart(
                          product.id
                        );

                        alert(
                          "Added To Cart"
                        );

                      }}
                    >
                      <ShoppingBag size={16}/>
                      Add To Cart
                    </button>

                  </div>
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
