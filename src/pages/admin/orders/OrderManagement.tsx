import "./OrderManagement.scss";
import { useEffect,useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
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
        <AdminLayout>
          <div className="orders-page">

            <div className="orders-header">

              <h1>
                Orders Management
              </h1>

              <p>
                Track and manage customer orders
              </p>

            </div>

            <div className="stats-row">

              <div className="stat-card">
                <h2>{orders.length}</h2>
                <p>Total Orders</p>
              </div>

              <div className="stat-card">
                <h2>
                  {
                    orders.filter(
                      x => x.status === "Pending"
                    ).length
                  }
                </h2>
                <p>Pending</p>
              </div>

              <div className="stat-card">
                <h2>
                  {
                    orders.filter(
                      x => x.status === "Delivered"
                    ).length
                  }
                </h2>
                <p>Delivered</p>
              </div>

            </div>

            <div className="orders-grid">

              {
                orders.map(order => (

                  <div
                    className="order-card"
                    key={order.id}
                  >

                    <div className="order-top">

                      <h3>
                        Order #{order.id}
                      </h3>

                      <span
                        className={
                          `status ${order.status?.toLowerCase()}`
                        }
                      >
                        {order.status}
                      </span>

                    </div>

                    <div className="order-body">

                      <p>
                        Amount:
                        <strong>
                          ₹{order.totalAmount}
                        </strong>
                      </p>

                      <p>
                        Payment:
                        <strong>
                          {order.paymentStatus}
                        </strong>
                      </p>

                      <p>
                        Date:
                        <strong>
                          {new Date(
                            order.createdAt
                          ).toLocaleDateString()}
                        </strong>
                      </p>

                    </div>

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

      </div>
    </AdminLayout>
  );
};

export default OrdersManagement;