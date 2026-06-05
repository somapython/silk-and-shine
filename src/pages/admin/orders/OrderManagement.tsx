import "./OrderManagement.scss";
import { useEffect,useState } from "react";
import api from "../../../services/api";

const OrdersManagement = () => {

  const [orders,setOrders] =
  useState<any[]>([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {

    const response =
      await api.get(
        "/admin/orders"
      );

    setOrders(
      response.data
    );
  };

  return (
    <div className="admin-page">

      <h1>
        Orders Management
      </h1>

      {
        orders.map(order => (

          <div
            className="order-card"
            key={order.id}
          >
            <h3>
              Order #{order.id}
            </h3>

            <p>
              ₹{order.totalAmount}
            </p>

            <select
              defaultValue={
                order.status
              }
            >
              <option>
                Pending
              </option>

              <option>
                Packed
              </option>

              <option>
                Shipped
              </option>

              <option>
                Delivered
              </option>
            </select>

          </div>

        ))
      }

    </div>
  );
};

export default OrdersManagement;