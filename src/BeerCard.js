import React from "react";
import { FaBeer } from "react-icons/fa";

const hrStyle = {
  backgroundColor: "teal",
  padding: "5px 30px",
  border: "none",
};

function BeerCard(props) {
  const { handleClick } = props;
  return (
    <React.Fragment>
      <hr style={hrStyle}></hr>
      <div className="beerMain">
        <h1>{props.name}</h1> <h6>{props.first_brewed} </h6>
      </div>
      <hr style={hrStyle}></hr>
      <div className="beerAddition">
        <img
          alt="Punk Beer Collection"
          className="beerImage"
          src={props.image_url}
        ></img>
      </div>

      <div className="beerContainer">
        <h2>{props.tagline}</h2>
        <p>
          <span>ABV:{props.abv}</span>
        </p>
        <p>
          <span>
            <h5>
              {props.likeBeer}
              <button onClick={handleClick}>
                {" "}
                Cheers! <FaBeer />
              </button>
            </h5>{" "}
          </span>
        </p>
      </div>
    </React.Fragment>
  );
}

export default BeerCard;
