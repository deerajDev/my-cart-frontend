import React from "react";

const TotalCost = (props) => {
  const { totalBill, totalItems } = props;
  return (
    <div>
      <p className="heading">Total Items : {totalItems / 2}</p>
      <p className="heading">Grand Total : {totalBill / 2}</p>
    </div>
  );
};

export default TotalCost;
