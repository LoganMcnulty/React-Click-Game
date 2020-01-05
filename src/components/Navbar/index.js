import React from "react";

const styles = {
  navbarStyle: {
    background: "powderblue",
    minHeight: "70px",
    position: "fixed",
    width: "100%",
    webkitBoxShadow: "0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)",
    boxShadow: "0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)",
    color: "#fff",
    fontSize: "calc(10px + 14 * (100vw - 320px)/ 800)",
    zIndex: "99",
    whiteSpace: "nowrap",
  },
  ulStyle:{
    margin: "0",
  },
  liStyle:{
    display: "inline-block",
    padding: "26px 0",
    width: "50%",
    textAlign: "center"
  },
  aStyle:{
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  }
};

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav style={styles.navbarStyle} class="navbar">
      <ul style={styles.ulStyle}>
        <li style={styles.liStyle} class="brand">
          <a style={styles.aStyle} href="/">Stock Market Memory</a>
        </li>
        <li style={styles.liStyle}>Score: 0 | High Score: 0</li>
      </ul>
    </nav>
  );
}

export default Navbar;
