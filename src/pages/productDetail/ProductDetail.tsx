import "./ProductDetail.scss";

import saree from "../../assets/images/saree1.jpg";

const ProductDetail = () => {

  return (
    <div className="product-detail">

      <div className="left">

        <img src={saree} alt="" />

      </div>

      <div className="right">

        <h1>Royal Silk Saree</h1>

        <div className="price">
          ₹2499
        </div>

        <p>
          Premium wedding collection silk saree
          with elegant embroidery design.
        </p>

        <div className="buttons">

          <button className="cart-btn">
            Add To Cart
          </button>

          <button className="wishlist-btn">
            Wishlist
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;