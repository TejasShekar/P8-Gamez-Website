import heroImg from "../assets/trending-games.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="m-auto flex-center pos-relative">
      <img
        className="img-responsive hero-img"
        src={heroImg}
        alt="Trending Games"
      />
      <div className="overlay pos-abs"></div>
      <button className="btn btn-primary py-sm px-1 pos-abs">
        <Link to="/products">Shop Games</Link>
      </button>
    </div>
  );
};
