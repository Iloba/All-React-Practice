import React, { useState } from "react";
import Card from "./Card";
import "./BusinessPage.css";
const BusinessPage = (props) => {
  const [RandomPins, setRandomPins] = useState([]);
  const generateRandomPins = () => {
    const RandomPin = Math.floor(Math.random() * 2000);

    setRandomPins([RandomPin]);
    

     props.getRandomPins(RandomPins);
  };

  return (
    <Card className="business-page-details">
      <h1>My Name is Emeka Iloba</h1>
      <p>I am a fullstack Developer</p>
      <p>This Div is rendered through composition</p>
      Name: {props.details.name}
      Parent: {props.details.parent} &nbsp; I am a {props.details.classType}
      <br /> <br /> <br /> <br />
      <button onClick={generateRandomPins}>Generate Random Pins</button>
    </Card>
  );
};

export default BusinessPage;
