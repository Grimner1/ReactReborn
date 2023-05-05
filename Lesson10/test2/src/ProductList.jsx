import React from "react";

const PropductList = (props) => {
  const products = props.products;
  return (
    <div className="products">
      <ul className="products__list">
        {products.map((elem, index) => {
          return (
            <li className="products__list-item" key={index}>
              <span className="products__item-name">{elem.name}</span>
              <span className="products__item-price">{`$${elem.price}`}</span>
            </li>
          );
        })}
      </ul>
      <div className="products__total">
        {products.reduce((acc, el) => {
          return acc + el.price;
        }, 0)}
      </div>
    </div>
  );
};

export default PropductList;
