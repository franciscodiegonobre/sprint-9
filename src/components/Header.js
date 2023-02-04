import React from "react";
import logo from "../img/starwars_logo.jpg";

export default function Header() {
  return (
    <header>
      <img src={logo} className="nav--logo" />
    </header>
  );
}
