import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ShipCard from "./components/ShipCard";

function App() {
  //States
  const [shipList, setShipList] = useState([]);
/*   const [shipImages, setShipImages] = useState([]);  */


  // Effects: gets the list of ships from the API and puts in "shipList"
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      setShipList(res.data.results);
    });
  }, []);

  /* useEffect(() => {
    axios.get(`https://starwars-visualguide.com/assets/img/starships`).then((res) => {
      setShipImages(res.data.results);
    });
  }, []); */
  

  // Mapping
  const shipCards = shipList.map((item) => (
    <>
    <ShipCard item={item}/>
    </>
  ));
console.log(shipList)


  return (
    <div>
      <Header />
      <Navbar />
      {shipCards}
    
    </div>
  );
}

export default App;
