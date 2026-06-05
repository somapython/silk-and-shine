import "./ProductManagement.scss";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import AdminLayout from "../../../layouts/AdminLayout";
import ProductModal from "../../../components/productModal/ProductModal";
import { Plus } from "lucide-react";

const ProductsManagement = () => {

  const [products,setProducts] = useState<any[]>([]);
  const [showModal,setShowModal] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    const response =
      await api.get("/Products");

    setProducts(response.data);
  };

  const deleteProduct =
  async(id:number) =>
  {
    await api.delete(
      `/Products/${id}`
    );

    loadProducts();
  };

  return (
          <AdminLayout>

            <div className="products-header">

              <div>
                <h1>Products Management</h1>
                <p>Manage all sarees and jewellery products</p>
              </div>

              <button
                className="add-product-btn"
                onClick={() => setShowModal(true)}
              >
                <Plus size={18} />
                Add Product
              </button>

            </div>

            <div className="products-table-container">

              <table>

                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {
                    products.map(product => (

                      <tr key={product.id}>

                        <td>

                          <div className="product-cell">

                            <img
                              src={
                                product.imageUrl ||
                                "https://via.placeholder.com/60"
                              }
                              alt={product.name}
                            />

                            <div>

                              <h4>
                                {product.name}
                              </h4>

                              <p>
                                ID #{product.id}
                              </p>

                            </div>

                          </div>

                        </td>

                        <td>
                          <span className="category-badge">
                            {product.category}
                          </span>
                        </td>

                        <td>
                          ₹{product.price}
                        </td>

                        <td>

                          <span
                            className={
                              product.stock > 10
                                ? "stock in-stock"
                                : "stock low-stock"
                            }
                          >
                            {product.stock}
                          </span>

                        </td>

                        <td>

                          <div className="action-buttons">

                            <button
                              className="edit-btn"
                            >
                              Edit
                            </button>

                            <button
                              className="delete-btn"
                              onClick={() =>
                                deleteProduct(product.id)
                              }
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))
                  }

                </tbody>

              </table>

            </div>

            <ProductModal
              isOpen={showModal}
              onClose={() =>
                setShowModal(false)
              }
              onSave={async(product)=>{

                await api.post(
                  "/Products",
                  product
                );

                loadProducts();

                setShowModal(false);
              }}
            />

      </AdminLayout>
  );
};

export default ProductsManagement;