import React, { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { useCart } from "../context/use-cart";
import Cart from "../components/Cart";

import CartIcon from "../supermarket.svg";

export default function Header() {
  const { cart } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={CartIcon} width="30" alt="cartIcon" />({cart.length})
          </button>

          <div
            ref={modalRef}
            className="cart-modal"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
