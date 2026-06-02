import "./ProductCard.scss";

type Props = {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
};

const ProductCard = ({
  image,
  title,
  price,
  oldPrice
}: Props) => {
  return (
    <div className="product-card">

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