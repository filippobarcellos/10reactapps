import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
// import { useCart } from "../context/use-cart";

import { ProductList } from "./styles";

const Home = () => {
  // const { addItem, removeItem, countItemsInCart } = useCart();

  return (
    <div className="home">
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
            alt="Sneakers"
          />
          <strong>Nike Sneaker</strong>
          <strong>$69,90</strong>

          <button type="button">
            <div>
              <MdAddShoppingCart sie={16} color="#FFF" />
            </div>
            <span>Add to Cart</span>
          </button>
        </li>

        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
            alt="Sneakers"
          />
          <strong>Nike Sneaker</strong>
          <strong>$69,90</strong>

          <button type="button">
            <div>
              <MdAddShoppingCart sie={16} color="#FFF" />
            </div>
            <span>Add to Cart</span>
          </button>
        </li>

        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
            alt="Sneakers"
          />
          <strong>Nike Sneaker</strong>
          <strong>$69,90</strong>

          <button type="button">
            <div>
              <MdAddShoppingCart sie={16} color="#FFF" />
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
      </ProductList>
    </div>
  );
};

export default Home;
