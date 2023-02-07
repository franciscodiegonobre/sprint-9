import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ShipCard from "./components/ShipCard";

function App() {
//States
  const [shipList, setShipList] = useState([]);
  const [shipImages, setShipImages] = useState([]); 

// Effects: gets the list of ships from the API and puts in "shipList"
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      setShipList(res.data.results);
    });
  }, []);

// Gets the list of ships and builds new urls with the url ids and the img ids
  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/`).then((res) => {
      const urls = res.data.results.map(element =>
        element.url);
      const idsMapped = urls.map(element => element.match(/\d+/))
      const finalUrls = idsMapped.map(element => `https://starwars-visualguide.com/assets/img/starships/${element[0]}.jpg`)
      setShipImages(finalUrls);
    });
  }, []);

// Combines both states so that I can pass shipList with the img values as props
  for (let i = 0; i < shipList.length; i++) {
    shipList[i].img = shipImages[i];
  }

// Maps over shipList state and passes all of its values as props
  const shipCards = shipList.map((item) => (
    <>
    <ShipCard item={item}/>
    </>
  ));

  return (
    <div>
      <Header />
      <Navbar />
      {shipCards}
    </div>
  );
}

export default App;
