import "./AdminSidebar.scss";
import {
  Package,
  Image,
  ShoppingBag,
  Users,
  LayoutGrid,
  Home
} from "lucide-react";

import { NavLink } from "react-router-dom";

const AdminSidebar = () => {

  const menus = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/admin"
    },
    {
      title: "Products",
      icon: <Package size={20} />,
      path: "/admin/products"
    },
    {
      title: "Hero Banner",
      icon: <Image size={20} />,
      path: "/admin/hero"
    },
    {
      title: "Orders",
      icon: <ShoppingBag size={20} />,
      path: "/admin/orders"
    },
    {
      title: "Categories",
      icon: <LayoutGrid size={20} />,
      path: "/admin/categories"
    },
    {
      title: "Users",
      icon: <Users size={20} />,
      path: "/admin/users"
    }
  ];

  return (
    <aside className="admin-sidebar">

      <div className="logo">
        Silk & Shine
      </div>

      <div className="menu-list">

        {
          menus.map(menu => (

            <NavLink
              key={menu.path}
              to={menu.path}
              className="menu-item"
            >
              {menu.icon}

              <span>
                {menu.title}
              </span>

            </NavLink>

          ))
        }

      </div>

    </aside>
  );
};

export default AdminSidebar;