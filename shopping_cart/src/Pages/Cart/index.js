import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
// import { useCart } from "../context/use-cart";
import { Container, ProductTable, Total } from "./styles";

const Cart = () => {
  // const { addItem, removeItem, cart, totalPrice } = useCart();

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner/26/D14-6469-026/D14-6469-026_zoom1.jpg?ts=1581113762"
                alt="Product"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="7159c1" />
                </button>
                <input type="number" readOnly value={0} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$200,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Checkout</button>
        <Total>
          <span>TOTAL</span>
          <strong>$1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
