import React from "react";
import "./style.css";

const styles = {
  card: {
    background: "#fff",
    borderRadius: "2px",
    height: "200px",
    margin: "1rem",
    position: "relative",
    width: "200px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999",
    textAlign: "left",
    transition: "transform .2s"
  },
  imgContainer: {
    height: "100%",
    overflow: "hidden",
    textAlign: "center",
    background: "lightgrey",
    position: "relative",
  },
  image: {
    width: "70%",
    position: "absolute",
    top: "0",
    bottom: '0',
    right: '0',
    left: "0",
    margin: "auto auto",
  }
}

function StockCard(props) {
  return (
    <div className="card" onClick={() => props.removeStock(props.id)} style={styles.card}>
      <div className="img-container" style={styles.imgContainer}>
        <img alt={props.name} src={props.image} style={styles.image}/>
      </div>
    </div>
  );
}

export default StockCard;
