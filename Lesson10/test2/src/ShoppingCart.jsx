import React from "react";
import CartTittle from "./CartTittle";
import PropductList from "./ProductList";

const ShoppingCart = (props) => {
  const products = [
    {
      name: "iPhone 11",
      price: 999,
    },
    {
      name: "iPhone 10",
      price: 650,
    },
    {
      name: "iPhone 9",
      price: 550,
    },
    {
      name: "iPad Pro",
      price: 799,
    },
    {
      name: "iPad Lite",
      price: 600,
    },
  ];

  //   console.log(props.name);

  const name = props.name;
  const count = products.length;

  return (
    <div className="column">
      <CartTittle name={name} count={count} />
      <PropductList products={products} />
    </div>
  );
};

export default ShoppingCart;
