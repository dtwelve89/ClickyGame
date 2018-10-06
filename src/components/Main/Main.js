import React from "react";
import "./Main.css";

const Main = (props) => (
  <div className="card float-md-left zoom">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.onChange(props.id)} />
    </div>
  </div>
);

export default Main;