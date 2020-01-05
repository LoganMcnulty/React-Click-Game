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
    Stocks
  };

  removeStock = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Stocks = this.state.Stocks.filter(stock => stock.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ Stocks });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar />
      <Header />
      <Wrapper>
        {this.state.Stocks.map(stock => (
          <StockCard
            removeStock={this.removeStock}
            id={stock.id}
            key={stock.id}
            name={stock.name}
            image={stock.image}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
