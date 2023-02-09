import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="home-page">
      <div className="container">
        <h1>STAR WARS STARSHIPS</h1>
        <Link to="/starships" className="home--start-button">
          START
        </Link>
      </div>
    </div>
  );
}
