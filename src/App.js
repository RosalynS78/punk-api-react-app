import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import BeerCard from "./BeerCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfBeer: [],
      // isClicked: true,
      // likedBeer:
      style: {
        color: "#f28e1c",
      },
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data.map((likeMe) => {
        likeMe.likeBeer = "Love It?  ";
        return likeMe;
      });
      console.log(arrayOfBeer);
      this.setState({ arrayOfBeer });
    });
  }

  handleClick = (e) => {
    console.log("this is working fine");
    e.preventDefault();
    e.target.style.color = "#f28e1c";
    console.log(e.target);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="beerStyle">
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard
                  key={index}
                  index={index}
                  name={beer.name}
                  abv={beer.abv}
                  tagline={beer.tagline}
                  image_url={beer.image_url}
                  first_brewed={beer.first_brewed}
                  likeBeer={beer.likeBeer}
                  handleClick={this.handleClick}
                />
              );
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
