import React from "react";
// import "./style.css";

const styles = {
  wrapper: {
    paddingTop: "50px",
    background: "whitesmoke",
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    padding: "20px",
    justifyContent: "space-around",
    aligntContent: "flex-start",
    overflow: "auto",
    width: "60%",
    margin:"auto"
  }
}

function Wrapper(props) {
  return <div className="wrapper" style={styles.wrapper}>{props.children}</div>;
}

export default Wrapper;
