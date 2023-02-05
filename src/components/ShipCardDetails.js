import React from "react";

export default function ShipCardDetails(props) {
  return (
    <div className="shipcardDetails">
      <p>{props.name}</p>
      <p>MODEL: {props.model}</p>
      <p>STARSHIP CLASS: {props.starship_class}</p>
      <p>MANUFACTURER: {props.manufacturer}</p>
      <p>COST: {props.cost_in_credits}</p>
      <p>CREW: {props.crew}</p>
      <p>PASSENGER CAPACITY: {props.passengers}</p>
      <p>CARGO CAPACITY: {props.cargo_capacity}</p>
      <p>CONSUMABLES: {props.consumables}</p>
      <p>LENGTH: {props.length}</p>
      <p>MAXIMUM ATMOSPHERING SPEED: {props.max_atmosphering_speed}</p>
      <p>HYPERDRIVE RATING: {props.hyperdrive_rating}</p>
      <p>MAXIMUM SPEED IN REALSPACE: {props.MGLT}</p>
    </div>
  );
}
