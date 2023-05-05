import React from "react";
import moment from "moment";

const Transactions = ({ amount, from, rate, time, to }) => {
  const getDate = (date) => moment(date).format("DD MMM");
  const getTime = (date) => moment(date).format("HH:mm");
  const numFormat = (numers) => new Intl.NumberFormat("en-GB").format(numers);

  return (
    <li className="transaction">
      <span className="transaction__date">{getDate(time)}</span>
      <span className="transaction__time">{getTime(time)}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{numFormat(amount)}</span>
    </li>
  );
};

export default Transactions;
