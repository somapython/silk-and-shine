import "./Cart.scss";
import { useEffect, useState } from "react";
import { getCart } from "../../services/cartService";

const Cart = () => {

  const [cart,setCart] =
  useState<any[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {

    const data =
      await getCart();

    setCart(data);
  };

  const total =
    cart.reduce(
      (sum,item)=>
      sum +
      item.quantity,
      0
    );

  return (
    <div className="cart-page">

      <h1>
        Shopping Cart
      </h1>

      {
        cart.map(item => (

          <div
            className="cart-item"
            key={item.id}
          >

            <div className="cart-image">
              <img
                src={item.imageUrl}
                alt=""
              />
            </div>

            <div className="cart-info">
              <h3>
                {item.name}
              </h3>

              <p>
                ₹ {item.price}
              </p>
            </div>

            <div className="cart-qty">
              Qty:
              {item.quantity}
            </div>

          </div>

        ))
      }

      <div className="cart-summary">

        <h2>
          Total Items:
          {total}
        </h2>

        <button>
          Proceed To Checkout
        </button>

      </div>

    </div>
  );
};

export default Cart;