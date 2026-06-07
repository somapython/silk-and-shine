import "./CategoryManagement.scss";
import { useEffect,useState } from "react";
import api from "../../../services/api";
import AdminLayout from "../../../layouts/AdminLayout";

const CategoriesManagement = () => {

  const [categories,setCategories] =
  useState<any[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories =
  async() =>
  {
    const response =
      await api.get(
        "/Category"
      );

    setCategories(
      response.data
    );
  };

  return (
    <AdminLayout>
    <div className="admin-page">

      <h1>
        Categories
      </h1>

      {
        categories.map(cat => (

          <div
            className="category-row"
            key={cat.id}
          >
            {cat.name}
          </div>

        ))
      }

    </div>
    </AdminLayout>
  );
};

export default CategoriesManagement;