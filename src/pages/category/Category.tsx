import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

const Category = () => {

  const { category } =
    useParams();

// useEffect(() => {
//   loadProducts();
// }, [category]);

  return (
    <>
      <Navbar />

      <div className="category-page">

        <h1>
          {category}
        </h1>

      </div>

      <Footer />
    </>
  );
};

export default Category;