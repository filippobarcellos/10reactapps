import React from "react";
import { useCart } from "../context/use-cart";

export default function Product({ product }) {
  const { addItem, removeItem, countItemsInCart } = useCart();

  return (
    <div className="product">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>

      <div className="product-buttons">
        {countItemsInCart(product.sku) > 0 ? (
          <button className="remove" onClick={() => removeItem(product.sku)}>
            Remove
          </button>
        ) : (
          <div />
        )}
        <button className="add" onClick={() => addItem(product)}>
          Add to Cart ({countItemsInCart(product.sku)})
        </button>
      </div>
    </div>
  );
}
