import React from "react";
import Card from "./Card";
import "./BusinessPage.css";
const BusinessPage = (props) => {
  return (
    <Card className="business-page-details">
      <h1>My Name is Emeka Iloba</h1>
      <p>I am a fullstack Developer</p>
      <p>This Div is rendered through composition</p>
      Name: {props.details.name}
      Parent: {props.details.parent} &nbsp;
      I am a {props.details.classType}
    </Card>
  );
};

export default BusinessPage;
