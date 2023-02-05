import React from "react";
import { useState } from "react";
import ShipCardDetails from "./ShipCardDetails";

export default function ShipCard(props) {
  const [toggleDetails, setToggleDetails] = useState(false);
  function toggleDetailsHandler() {
    setToggleDetails((prevToggleDetails) => !prevToggleDetails);
  }

  return (
    <>
      <div className="shipcard" onClick={toggleDetailsHandler}>
        <h3 className="uppercase">{props.item.name}</h3>
        <h4>{props.item.model}</h4>
      </div>
      {toggleDetails && (
        <ShipCardDetails
          toggleDetails={toggleDetails}
          name={props.item.name}
          model={props.item.model}
          starship_class={props.item.starship_class}
          manufacturer={props.item.manufacturer}
          cost_in_credits={props.item.cost_in_credits}
          crew={props.item.crew}
          passengers={props.item.passengers}
          cargo_capacity={props.item.cargo_capacity}
          consumables={props.item.consumables}
          length={props.item.length}
          max_atmosphering_speed={props.item.max_atmosphering_speed}
          hyperdrive_rating={props.item.hyperdrive_rating}
          MGLT={props.item.MGLT}
        />
      )}
    </>
  );
}
