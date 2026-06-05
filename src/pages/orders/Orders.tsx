import "./Orders.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";

const Orders = () => {

  const [orders, setOrders] =
    useState<any[]>([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {

    // API later
    setOrders([
      {
        id: 1001,
        amount: 2499,
        status: "Delivered",
        date: "2026-06-05"
      },
      {
        id: 1002,
        amount: 5999,
        status: "Shipped",
        date: "2026-06-08"
      }
    ]);
  };

  return (
    <>
      <Navbar />

      <div className="orders-page">

        <h1>My Orders</h1>

        {orders.map(order => (

          <div
            className="order-card"
            key={order.id}
          >
            <div>
              <h3>
                Order #{order.id}
              </h3>

              <p>{order.date}</p>
            </div>

            <div>
              ₹{order.amount}
            </div>

            <div
              className={`status ${order.status.toLowerCase()}`}
            >
              {order.status}
            </div>
          </div>

        ))}

      </div>

      <Footer />
    </>
  );
};

export default Orders;