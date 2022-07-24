import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaHeart} from "react-icons/fa";

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
      <main className="beerMain">
        <h1>{props.name}</h1> <h6>{props.first_brewed} </h6>
      </main>
      <hr style={hrStyle}></hr>
      <div className="beerAddition">
        <img
          alt="Punk Beer Collection"
          className="beerImage"
          src={props.image_url}
        ></img>
        <section>
          <h2>Description</h2>
          {props.description}      
              <h5>
                {props.likeBeer}  
                <br></br>
                <button className="buttonStyle" onClick={handleClick}>
                  {" "}
                  <FaHeart /> Cheers! 
                </button>
              </h5>{" "}
              </section>  
      </div>
      <div className="beerContainer">
        <section>
          <h3>Good With:</h3>
          {props.food_pairing}
          </section>
        <h2>{props.tagline}</h2>
        <span><FaBeer /></span>
        <h4>ABV: {props.abv}</h4>
      </div>
    </React.Fragment>
  );
}

export default BeerCard;
