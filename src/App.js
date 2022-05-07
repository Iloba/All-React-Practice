import React from "react";
import BusinessPage from "./Components/FormComponent/BusinessPage";
import Form from "./Components/FormComponent/Form";
import MessageBox from "./Components/FormComponent/MessageBox";

function App() {
  const MessageBoxDetails = {
    name: "MessageBox",
    classType: "Functional Component",
    parent: "App Component",
  };

  const FormDetails = {
    name: "Form",
    classType: "Functional Component",
    parent: "App Component",
  };

  const BusinessPageDetails = {
    name: "Business Page",
    classType: "Functional Component",
    parent: "App Component",
  };

  const RandomPins = [];
  const HandleRecievedRandomPins = (arr) => {
   RandomPins.push(...arr);
  //  console.log(RandomPins)
  };

  return (
    <div>
      <Form details={FormDetails}></Form>
      {/* <MessageBox
        details={MessageBoxDetails}
        RandomPins={HandleRecievedRandomPins}
      ></MessageBox>
      <BusinessPage
        details={BusinessPageDetails}
        getRandomPins={HandleRecievedRandomPins}
      ></BusinessPage> */}
    </div>
  );
}

export default App;
