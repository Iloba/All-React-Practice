import React, { useState, useEffect } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import BusinessPage from "./Components/FormComponent/BusinessPage";
import Form from "./FormPractice/form"
import MessageBox from "./Components/FormComponent/MessageBox";
import TravelJournal from "./Components/FormComponent/TravelJournal";
import Note from "./Notes/Note";
import Draft from "./Notes/Draft";



function App() {
  const [data, setData] = useState([]);
  const [showDraft, setShowDraft] = useState(false);
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

  // const arrayOfThings = ["Thing 1", "Thing 2"];




  //Use State to Fix the issue

  const [arrayOfThings, setArrayOfThings] = useState(["Thing1", "Thing 2", "Thing 3"]);


  const AddThings = () => {
    setArrayOfThings((previousState) => [...previousState, `Thing ${previousState.length + 1}`]);
  }

  const styles = {
    backgroundColor: 'red',
    border: 'none',
    padding: '10px 20px',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '20px'
  }

  //State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
    siblings: ''
  })

  const HandleForm = (event) => {

    setFormData(previousFormData => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  // console.log(formData);

  const HandleSubmission = (event) => {
    event.preventDefault();
  }

  const [emeka, setEmeka] = useState('Emeka');
  //Practicing UseEffect
  useEffect(() => {
    setEmeka('Mr Emeka');
  })

  const getDrafts = (draft) => {
    setData((prevDrafts) => {
      return [...prevDrafts, draft];
    });


    //Show components only if there is data available
    if(draft.length > 0){
      setShowDraft(true);
    }
  }

 

  return (
    <div>
      {/* <Form details={FormDetails}></Form> */}
      {/* <TravelJournal/> */}
      {/* <MessageBox
        details={MessageBoxDetails}
        RandomPins={HandleRecievedRandomPins}
      ></MessageBox>
      <BusinessPage
        details={BusinessPageDetails}
        getRandomPins={HandleRecievedRandomPins}
      ></BusinessPage> */}
      {/* {arrayOfThings.map(thing => <p>{thing}</p>)}
      <button style={styles} onClick={AddThings}>Add Things</button> */}

      {/* <form onSubmit={HandleSubmission}>
        {emeka}
        <div className="form-group">
          <label for="">Name</label>
          <input type="text" className="form-control" name="name" onChange={HandleForm} value={formData.name} />
        </div>

        <div className="form-group">
          <label for="">Email</label>
          <input type="text" className="form-control" name="email" onChange={HandleForm} value={formData.email} />
        </div>

        <div className="form-group">
          <label for="">Phone</label>
          <input type="text" className="form-control" name="phone" onChange={HandleForm} value={formData.phone} />
        </div>

        <div className="form-group">
          <label for="">Comments</label>
          <textarea name="comment" onChange={HandleForm}  value={formData.comment}/>
        </div>

        <div className="form-group">
          <label for="">No of Siblings</label>
          <input type="text" className="form-control" name="siblings" onChange={HandleForm} value={formData.siblings} />
        </div>

        <button>Submit</button>
      </form> */}

      {/* <Form/> */}
    
     
        <Note getDraftsHandler={getDrafts}/>

        {showDraft &&   <Draft data={data}  /> }
      
     

    </div>
  );
}

export default App;
