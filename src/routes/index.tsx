import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Wishlist from "../pages/wishlist/Wishlist";
import Profile from "../pages/profile/Profile";
import Category from "../pages/category/Category";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Address from "../pages/address/Address";
import HeroManagement from "../pages/admin/hero/HeroManagement";
import ProductManagement from "../pages/admin/products/Productmanagement";
import OrderManagement from "../pages/admin/orders/OrderManagement";
import AdminRoute from "./AdminRoute";
import UsersManagement from "../pages/admin/users/UsersManagement";
import CategoryManagement from "../pages/admin/categories/CategoryManagement";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/wishlist" element={<Wishlist />}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/address" element={<Address />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/admin" element= {
          <AdminRoute>
            <Dashboard />
          </AdminRoute>}
      />
      <Route path="/admin/hero" element={<HeroManagement />} />
      <Route path="/admin/products" element={<ProductManagement />} />
      <Route path="/admin/orders" element={<OrderManagement />} />
      <Route path="/admin/users" element={<UsersManagement />} />
      <Route path="/admin/categories" element={<CategoryManagement />} />
    </Routes>
  );
};

export default AppRoutes;