import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ShipCard from "./components/ShipCard";

function App() {
  const [shipList, setShipList] = useState([]);

  // Gets the list of ships from the API and puts in "shipList"
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      setShipList(res.data.results);
    });
  }, []);

  console.log(shipList);

  /* const ships = shipList.map((item) => <div>{item.name}</div>); */
  const ships = shipList.map((item) => (
    <ShipCard name={item.name} model={item.model} />
  ));

  return (
    <div>
      <Header />
      <Navbar />
      {ships}
    </div>
  );
}

export default App;
