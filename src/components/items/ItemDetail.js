import React from "react";

const ItemDetail = (props) => {
  const { name, cost, numItems, totalCost } = props;
  return (
    <div className="item_detail_container">
      <p className="item_detail">{name}</p>
      <p className="item_detail">{cost}</p>
      <p className="item_detail">{numItems}</p>
      <p className="item_detail">{totalCost}</p>
    </div>
  );
};

export default ItemDetail;
