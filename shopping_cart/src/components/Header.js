import React, { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

import CartIcon from "../supermarket.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={CartIcon} width="30" />({0})
          </button>

          <div
            ref={modalRef}
            className="cart-modal"
            style={{ display: isOpen ? "block" : "none" }}
          >
            cart goes here
          </div>
        </div>
      </div>
    </header>
  );
}
