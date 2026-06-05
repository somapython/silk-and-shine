import "./Wishlist.scss";
import { useEffect, useState } from "react";
import {
  getWishlist
} from "../../services/wishlistService";

const Wishlist = () => {

  const [items,setItems] =
  useState<any[]>([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {

    const data =
      await getWishlist();

    setItems(data);
  };

  return (
    <div className="wishlist-page">

      <h1>
        My Wishlist
      </h1>

      <div className="wishlist-grid">

        {
          items.map(item => (

            <div
              className="wishlist-card"
              key={item.id}
            >
              <h3>
                Product #{item.productId}
              </h3>
            </div>

          ))
        }

      </div>

    </div>
  );
};

export default Wishlist;