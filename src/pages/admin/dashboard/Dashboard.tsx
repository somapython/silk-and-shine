import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import {
  Package,
  Image,
  ShoppingBag,
  Users,
  LayoutGrid,
  ArrowLeft
} from "lucide-react";

const AdminDashboard = () => {

  const navigate = useNavigate();

  const menus = [
    {
      title: "Products",
      route: "/admin/products",
      icon: <Package size={40}/>
    },
    {
      title: "Hero Banner",
      route: "/admin/hero",
      icon: <Image size={40}/>
    },
    {
      title: "Orders",
      route: "/admin/orders",
      icon: <ShoppingBag size={40}/>
    },
    {
      title: "Categories",
      route: "/admin/categories",
      icon: <LayoutGrid size={40}/>
    },
    {
      title: "Users",
      route: "/admin/users",
      icon: <Users size={40}/>
    }
  ];

  return (
    <div className="admin-dashboard">

      <div className="dashboard-header">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18}/>
          Back To Store
        </button>

        <div>
          <h1>
            Silk & Shine Admin
          </h1>

          <p>
            Manage products, orders, banners & users
          </p>
        </div>

      </div>

      <div className="stats-row">

        <div className="stat-card">
          <h2>125</h2>
          <p>Total Orders</p>
        </div>

        <div className="stat-card">
          <h2>65</h2>
          <p>Products</p>
        </div>

        <div className="stat-card">
          <h2>40</h2>
          <p>Customers</p>
        </div>

        <div className="stat-card">
          <h2>₹1.2L</h2>
          <p>Revenue</p>
        </div>

      </div>

      <div className="dashboard-grid">

        {menus.map(menu => (

          <div
            key={menu.title}
            className="dashboard-card"
            onClick={() =>
              navigate(menu.route)
            }
          >
            <div className="card-icon">
              {menu.icon}
            </div>

            <h3>
              {menu.title}
            </h3>

            <span>
              Manage →
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AdminDashboard;