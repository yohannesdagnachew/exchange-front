import React from "react";
import "./Bar.css";

export default function Bar({ data, rank }) {
  return (
    <div className="bar-container">
      <h2>{data.bankName}</h2>
      <h2>USD</h2>
      <h2>{data.buyingPrice}</h2>
      <h2>{data.sellingPrice}</h2>
      <h2>{rank+1}</h2>
    </div>
  );
}
