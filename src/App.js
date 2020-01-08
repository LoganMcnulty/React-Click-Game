import React, { Component } from "react";
import StockCard from "./components/StockCard";
import Wrapper from "./components/Wrapper";
import Stocks from "./stocks.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    stockData: [],
    pickedStocks: [],
    currScore: 0,
    hiScore: 0
  };

  componentDidMount() {
    this.setState({ stockData: Stocks });
  };

  clickStock = stockID => {
    console.log(stockID)

    let updateStocks = this.state.stockData.sort(() => Math.random() - 0.5);
    this.setState({ stockData: updateStocks})

    if (this.state.pickedStocks.indexOf(stockID) > -1) {
      this.setState({ stockData: updateStocks, currScore: 0, pickedStocks: [] });
    } else {
      let updatePickedStocks = this.state.pickedStocks;
      updatePickedStocks.push(stockID);

      let newScore = this.state.currScore + 1;

      this.setState({ stockData: updateStocks, currScore: newScore, pickedStocks: updatePickedStocks });

      if (this.state.currScore >= this.state.hiScore) {
        this.setState({ hiScore: newScore });
      }
    }
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar currScore={this.state.currScore} hiScore={this.state.hiScore}/>
      <Header />
      <Wrapper>
        {
        this.state.stockData.map(stock => (
          <StockCard
            clickStock={this.clickStock}
            id={stock.id}
            key={stock.id}
            name={stock.name}
            image={stock.image}
          />
        ))
        }
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
