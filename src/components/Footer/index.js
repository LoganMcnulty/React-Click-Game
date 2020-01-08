import React from "react";

const styles = {
  footerStyle: {
    marginTop: "2%",
    background: "powderblue",
    width: "100%",
    WebkitBoxShadow: "0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)",
    boxShadow: "0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)",
    color: "#fff",
    fontSize: "calc(10px + 14 * (100vw - 320px)/ 800)",
  },
  ulStyle:{
    margin: "0",
  },
  liStyle:{
    display: "inline-block",
    padding: "26px 0",
    width: "100%",
    textAlign: "center"
  },
  aStyle:{
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  },
  iStyle:{
    marginLeft: "1%"
  }
};

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <nav style={styles.footerStyle} className="navbar">
      <ul style={styles.ulStyle}>
        <li style={styles.liStyle} className="brand">
          <a style={styles.aStyle} href="/">Stock Market Memory
          <i className="fas fa-search-dollar" style={styles.iStyle}></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
