// import "./ProductDetail.scss";

// import saree from "../../assets/images/saree1.jpg";

// const ProductDetail = () => {

//   return (
//     <div className="product-detail">

//       <div className="left">

//         <img src={saree} alt="" />

//       </div>

//       <div className="right">

//         <h1>Royal Silk Saree</h1>

//         <div className="price">
//           ₹2499
//         </div>

//         <p>
//           Premium wedding collection silk saree
//           with elegant embroidery design.
//         </p>

//         <div className="buttons">

//           <button className="cart-btn">
//             Add To Cart
//           </button>

//           <button className="wishlist-btn">
//             Wishlist
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default ProductDetail;

import "./ProductDetail.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getProductById } from "../../services/productService";

const ProductDetail = () => {

  const { id } = useParams();

  const [product, setProduct] =
    useState<any>(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {

    try {

          const data =
        await getProductById(
          Number(id)
        );

      setProduct(data);

    } catch (error) {

      console.log(error);

    }
  };

  if (!product)
  {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="product-detail">

        <div className="product-image">

          <img
            src={product.imageUrl}
            alt={product.name}
          />

        </div>

        <div className="product-info">

          <h1>
            {product.name}
          </h1>

          <h2>
            ₹ {product.price}
          </h2>

          <p>
            {product.description}
          </p>

          <button>
            Add To Cart
          </button>

          <button>
            Add To Wishlist
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;