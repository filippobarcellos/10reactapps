import React from "react";

export default function Product({ product }) {
  // const { addItem, removeItem, findInCart } = useCart();

  return (
    <div className="product">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>

      <div className="product-buttons">
        <button className="remove">Remove</button>
        <button className="add">Add</button>
      </div>
    </div>
  );
}
