import React from "react";
import "./Journal.css";
const Journal = (props) => {
  return (
    <div className="journal">
      <div className="img-box">
        <img className="img" src={props.data.img} alt="" />
      </div>
      <div className="text-box">
        <h3>
          {props.data.city} &nbsp;
          <span className="map-link">
            <a href={props.data.link}>View on Google Map</a>
          </span>
        </h3>
        <h2>{props.data.country}</h2>
        <p>{props.data.date}</p>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};

export default Journal;
