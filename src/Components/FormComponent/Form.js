import React, { useState } from "react";
import "./Form.css";
import FancyBorder from "./FancyBorder";
const Form = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [facultyInputValue, setFacultyInputValue] = useState("");
  const [departmentInputValue, setDepartmentInputValue] = useState("");
  const [levelInputValue, setLevelInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState("");
  const [showButton, updateShowButton] = useState(false);

  const [validInput, setValidInput] = useState(true);
  

  const NameChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setValidInput(true);
    }
    setNameInputValue(event.target.value);
  };

  const EmailChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setValidInput(true);
    }

    setEmailInputValue(event.target.value);
    
  };

  const FacultyChangeHandler = (event) => {

    if(event.target.value.trim().length > 0){
      setValidInput(true);
    }

    setFacultyInputValue(event.target.value);
  };

  const DepartmentChangeHandler = (event) => {

    if(event.target.value.trim().length > 0){
      setValidInput(true);
    }

    setDepartmentInputValue(event.target.value);
  };

  const LevelChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setValidInput(true);
    }
    setLevelInputValue(event.target.value);
  };

  const DateHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setValidInput(true);
      updateShowButton(true);
    }
    setDateInputValue(event.target.value);
  };

  const FormSubmissionHandler = (event) => {
    event.preventDefault();

    //VALIDATE FORM
    if(nameInputValue.trim().length === 0){
      setValidInput(false);
      return;
    }

    if(emailInputValue.trim().length === 0){
      setValidInput(false);
      return;
    }

    if(facultyInputValue.trim().length === 0){
      setValidInput(false);
      return;
    }

    if(departmentInputValue.trim().length === 0){
      setValidInput(false);
      return;
    }

    if(levelInputValue.trim().length === 0){
      setValidInput(false);
      return;
    }

    if(dateInputValue.trim().length === 0){
      setValidInput(false);
      return;
    }


    const StudentData = {
      id: new Date().getMilliseconds(),
      name: nameInputValue,
      email: emailInputValue,
      faculty: facultyInputValue,
      department: departmentInputValue,
      level: levelInputValue,
      dateofBirth: dateInputValue,
    };

    console.log(StudentData);
    setNameInputValue("");
    setEmailInputValue("");
    setFacultyInputValue("");
    setDepartmentInputValue("");
    setLevelInputValue("");
    setDateInputValue("");
  };

  return (
    <FancyBorder className="form-box">
      <div className="">
        <h2 className="register-heading">Register</h2>
        <form action="" onSubmit={FormSubmissionHandler}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className={!validInput ? 'form-input invalid' : 'form-input'}
              placeholder="Name"
              onChange={NameChangeHandler}
              value={nameInputValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className={!validInput ? 'form-input invalid': 'form-input'}
              placeholder="Email"
              onChange={EmailChangeHandler}
              value={emailInputValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Faculty</label>
            <input
              type="text"
              className={`form-input  ${!validInput ? 'invalid' : ''}`}
              placeholder="Faculty"
              onChange={FacultyChangeHandler}
              value={facultyInputValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Department</label>
            <input
              type="text"
              className={`form-input  ${!validInput ? 'invalid': ''}`}
              placeholder="Department"
              onChange={DepartmentChangeHandler}
              value={departmentInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Level</label>
            <input
              type="text"
              className={`form-input ${!validInput ? 'invalid' : ''}`}
              placeholder="Level"
              onChange={LevelChangeHandler}
              value={levelInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date of Birth</label>
            <input
              type="date"
              className={`form-input ${!validInput ? 'invalid' : ''}` }
              onChange={DateHandler}
              value={dateInputValue}
            />
          </div>

          <div className="form-group">
            <button className={`form-button ${!showButton ? 'd-none' : ''}`}>Submit</button>
          </div>
        </form>
      </div>
    </FancyBorder>
  );
};

export default Form;
