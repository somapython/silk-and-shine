import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";



type Props = {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
};

const ProductCard = ({
  id,
  image,
  title,
  price,
  oldPrice
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() =>
    navigate(`/product/${id}`)
  }>

      <div className="image-section">
        <img src={image} alt={title} />
      </div>

      <div className="content">
        <h3>{title}</h3>

        <div className="price-row">
          <span className="price">₹{price}</span>

          {oldPrice && (
            <span className="old-price">
              ₹{oldPrice}
            </span>
          )}
        </div>

        <button>Add To Cart</button>
      </div>

    </div>
  );
};

export default ProductCard;