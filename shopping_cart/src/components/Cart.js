import React from "react";
import { useCart } from "../context/use-cart";

export default function Cart() {
  const { addItem, removeItem, cart, totalPrice } = useCart();

  return (
    <div className="cart">
      {cart.map((product, index) => (
        <div className="cart-item" key={index}>
          <img src={product.image_url} alt={product.name} width="100" />

          <div className="content">
            <h3>{product.name}</h3>

            <div className="cart-buttons">
              <button onClick={() => removeItem(product.sku)}>-</button>
              <button>0</button>
              <button onClick={() => addItem(product.sku)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <div className="total">$100</div>
    </div>
  );
}
