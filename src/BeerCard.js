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

        <p>
          <h2>Description</h2>
          {props.description}
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
        </p>
      </div>

      <div className="beerContainer">
        <p>
          <h3>Good With:</h3>
          {props.food_pairing}
        </p>
        <h2>{props.tagline}</h2>
        <p>ABV:{props.abv}</p>
      </div>
    </React.Fragment>
  );
}

export default BeerCard;
