import React from "react";

const CartTittle = (props) => {
  return (
    <>
      {props.name && (
        <div className="cart-title">{`${props.name}, you added ${props.count} items`}</div>
      )}
    </>
  );
};
export default CartTittle;
