import React from "react";

export default function ShipCard(props) {
  return (
    <div className="shipcard">
      <h3>{props.name}</h3>
      <h4>{props.model}</h4>
    </div>
  );
}
