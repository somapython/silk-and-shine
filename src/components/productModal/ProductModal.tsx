import "./ProductModal.scss";
import { X } from "lucide-react";
import { useState } from "react";

interface Props {

 isOpen:boolean;

 onClose:()=>void;

 onSave:(product:any)=>void;
}

const ProductModal = ({
 isOpen,
 onClose,
 onSave
}:Props) => {

 const [product,setProduct] =
 useState({

  name:"",

  description:"",

  price:"",

  category:"",

  stock:"",

  imageUrl:""
 });

 if(!isOpen) return null;

 return (

 <div className="modal-overlay">

  <div className="product-modal">

   <div className="modal-header">

    <h2>
      Add Product
    </h2>

    <button
     onClick={onClose}
    >
      <X/>
    </button>

   </div>

   <input
    placeholder="Product Name"
    onChange={(e)=>
    setProduct({
      ...product,
      name:e.target.value
    })}
   />

   <textarea
    placeholder="Description"
    onChange={(e)=>
    setProduct({
      ...product,
      description:e.target.value
    })}
   />

   <input
    placeholder="Price"
    type="number"
    onChange={(e)=>
    setProduct({
      ...product,
      price:e.target.value
    })}
   />

   <select
    onChange={(e)=>
    setProduct({
      ...product,
      category:e.target.value
    })}
   >
     <option>Category</option>

     <option>Silk Sarees</option>

     <option>Kanjivaram</option>

     <option>Banarasi</option>

     <option>Jewellery</option>

   </select>

   <input
    placeholder="Stock"
    type="number"
    onChange={(e)=>
    setProduct({
      ...product,
      stock:e.target.value
    })}
   />

   <input
    placeholder="Image URL"
    onChange={(e)=>
    setProduct({
      ...product,
      imageUrl:e.target.value
    })}
   />

   <button
    className="save-btn"
    onClick={() =>
    onSave(product)}
   >
     Save Product
   </button>

  </div>

 </div>

 );
};

export default ProductModal;