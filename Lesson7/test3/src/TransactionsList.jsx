import React from "react";

import Transactions from "./Transactions";

const TransactionsList = (props) => {
  const transaction = [...props.trans];

  return (
    <ul className="transactions">
      {transaction.map((trans) => {
        return <Transactions key={trans.id} {...trans} />;
      })}
    </ul>
  );
};

export default TransactionsList;
