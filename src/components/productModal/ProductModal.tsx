// import "./ProductModal.scss";
// import { X } from "lucide-react";
// import { useState } from "react";

// interface Props {

//  isOpen:boolean;

//  onClose:()=>void;

//  onSave:(product:any)=>void;
// }

// const ProductModal = ({
//  isOpen,
//  onClose,
//  onSave
// }:Props) => {

//  const [product,setProduct] =
//  useState({

//   name:"",

//   description:"",

//   price:"",

//   category:"",

//   stock:"",

//   imageUrl:""
//  });

//  if(!isOpen) return null;

//  return (

//  <div className="modal-overlay">

//   <div className="product-modal">

//    <div className="modal-header">

//     <h2>
//       Add Product
//     </h2>

//     <button
//      onClick={onClose}
//     >
//       <X/>
//     </button>

//    </div>

//    <input
//     placeholder="Product Name"
//     onChange={(e)=>
//     setProduct({
//       ...product,
//       name:e.target.value
//     })}
//    />

//    <textarea
//     placeholder="Description"
//     onChange={(e)=>
//     setProduct({
//       ...product,
//       description:e.target.value
//     })}
//    />

//    <input
//     placeholder="Price"
//     type="number"
//     onChange={(e)=>
//     setProduct({
//       ...product,
//       price:e.target.value
//     })}
//    />

//    <select
//     onChange={(e)=>
//     setProduct({
//       ...product,
//       category:e.target.value
//     })}
//    >
//      <option>Category</option>

//      <option>Silk Sarees</option>

//      <option>Kanjivaram</option>

//      <option>Banarasi</option>

//      <option>Jewellery</option>

//    </select>

//    <input
//     placeholder="Stock"
//     type="number"
//     onChange={(e)=>
//     setProduct({
//       ...product,
//       stock:e.target.value
//     })}
//    />

//    <input
//     placeholder="Image URL"
//     onChange={(e)=>
//     setProduct({
//       ...product,
//       imageUrl:e.target.value
//     })}
//    />

//    <button
//     className="save-btn"
//     onClick={() =>
//     onSave(product)}
//    >
//      Save Product
//    </button>

//   </div>

//  </div>

//  );
// };

// export default ProductModal;


import "./ProductModal.scss";
import { useState,useEffect } from "react";

interface Props {
  isOpen:boolean;
  onClose:()=>void;
  onSave:(data:any)=>void;
  product?:any;
}

const ProductModal = ({
  isOpen,
  onClose,
  onSave,
  product
}:Props) => {

  const [form,setForm] =
  useState({
    name:"",
    category:"",
    price:0,
    stock:0,
    imageUrl:"",
    description:""
  });

  useEffect(() => {

    if(product)
    {
      setForm(product);
    }

  },[product]);

  if(!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>
          {product
          ? "Edit Product"
          : "Add Product"}
        </h2>

        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })}
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e)=>
          setForm({
            ...form,
            category:e.target.value
          })}
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e)=>
          setForm({
            ...form,
            price:Number(e.target.value)
          })}
        />

        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e)=>
          setForm({
            ...form,
            stock:Number(e.target.value)
          })}
        />

        <input
          placeholder="Image Url"
          value={form.imageUrl}
          onChange={(e)=>
          setForm({
            ...form,
            imageUrl:e.target.value
          })}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e)=>
          setForm({
            ...form,
            description:e.target.value
          })}
        />

        <div className="modal-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={() =>
            onSave(form)}
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductModal;