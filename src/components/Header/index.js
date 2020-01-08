import React from "react";

const styles = {
  headerStyle: {
    backgroundColor: "#2c323c",
    backgroundImage: "url(../../../public/images/stockmarket-fluctuation.jpg)",
    backgroundRepeat: "repeat",
    color: "#fff",
    minHeight: "400px",
    padding: "200px 20px",
    paddingBottom: "140px",
    textAlign: "center"
  },
  hOneStyle:{
    margin: "0",
    marginBottom: "30px",
    fontSize: "4rem"
  },
  iStyle:{
    marginLeft: "1%"
  }
};



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.hOneStyle}>
        Stock Market Memory Game     
        <i className="fas fa-brain" style={styles.iStyle}></i>
        <i className="fas fa-search-dollar" style={styles.iStyle}></i>
      </h1>
      <h2>
        Click a stock's logo to earn points, but don't click the same logo more than once
      </h2>
      <h2>
        How good is your Stock Market Memory?
      </h2>
    </header>
  );
}

export default Header;
