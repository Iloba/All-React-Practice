import React from "react";
import BusinessPage from "./Components/FormComponent/BusinessPage";
import Form from "./Components/FormComponent/Form";
import MessageBox from "./Components/FormComponent/MessageBox";


function App() {
  const MessageBoxDetails = {
    name: 'MessageBox',
    classType: 'Functional Component',
    parent: 'App Component'
  }

  const FormDetails = {
    name: 'Form',
    classType: 'Functional Component',
    parent: 'App Component'
  }

  const BusinessPageDetails = {
    name: 'Business Page',
    classType: 'Functional Component',
    parent: 'App Component'
  }
  return <div>
    <Form details={FormDetails}></Form>
    <MessageBox details={MessageBoxDetails}></MessageBox>
    <BusinessPage details={BusinessPageDetails}></BusinessPage>
  </div>;
}

export default App;
