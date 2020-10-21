import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products";
import "./App.css";
import { CartProvider } from "./context/use-cart";

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />

        <main>
          <div className="products-list">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
