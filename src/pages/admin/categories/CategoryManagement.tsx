import "./CategoryManagement.scss";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import AdminLayout from "../../../layouts/AdminLayout";
import {
  LayoutGrid,
  Plus,
  Trash2,
  Edit
} from "lucide-react";

const CategoriesManagement = () => {

  const [categories, setCategories] = useState<any[]>([]);

    const [newCategory,setNewCategory] = useState("");

    const [showModal,setShowModal] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {

    const response =
      await api.get("/Category");

    setCategories(response.data);
  };

  return (
    <AdminLayout>

      <div className="categories-page">

        <div className="page-header">

          <div>
            <h1>
              Categories Management
            </h1>

            <p>
              Manage Saree & Jewellery Categories
            </p>
          </div>

          <button className="add-btn" onClick={() =>
              setShowModal(true)
            }>
            <Plus size={18}/>
            Add Category
          </button>

        </div>

        <div className="stats-row">

          <div className="stat-card">
            <LayoutGrid size={28}/>
            <h2>
              {categories.length}
            </h2>
            <p>
              Total Categories
            </p>
          </div>

        </div>

        <div className="categories-grid">

          {
            categories.map(cat => (

              <div
                key={cat.id}
                className="category-card"
              >

                <div className="category-icon">
                  📂
                </div>

                <h3>
                  {cat.name}
                </h3>

                <div className="card-actions">

                  <button className="edit-btn">
                    <Edit size={16}/>
                  </button>

                  <button className="delete-btn" onClick={async()=>{

                      await api.delete(
                      `/Category/${cat.id}`
                      );

                      loadCategories();

                      }}>
                    <Trash2 size={16}/>
                  </button>

                </div>

              </div>

            ))
          }

        </div>

        {
      showModal && (

      <div className="modal-overlay">

        <div className="modal-box">

          <h2>
            Add Category
          </h2>

          <input
            type="text"
            placeholder="Category Name"
            value={newCategory}
            onChange={(e)=>
              setNewCategory(
                e.target.value
              )
            }
          />

          <div className="modal-actions">

            <button
              className="cancel-btn"
              onClick={() =>
                setShowModal(false)
              }
            >
              Cancel
            </button>

            <button
              className="save-btn"
              onClick={async()=>{

                if(!newCategory.trim())
                {
                  alert(
                    "Enter Category Name"
                  );
                  return;
                }

                await api.post(
                  "/Category",
                  {
                    name:newCategory
                  }
                );

                setNewCategory("");

                setShowModal(false);

                loadCategories();

              }}
            >
              Save
            </button>

          </div>

        </div>

</div>

)}

      </div>

    </AdminLayout>
  );
};

export default CategoriesManagement;