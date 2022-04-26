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

  const NameChangeHandler = (event) => {
    setNameInputValue(event.target.value);
  };

  const EmailChangeHandler = (event) => {
    setEmailInputValue(event.target.value);
  };

  const FacultyChangeHandler = (event) => {
    setFacultyInputValue(event.target.value);
  };

  const DepartmentChangeHandler = (event) => {
    setDepartmentInputValue(event.target.value);
  };

  const LevelChangeHandler = (event) => {
    setLevelInputValue(event.target.value);
  };

  const DateHandler = (event) => {
    setDateInputValue(event.target.value);
  };

  const FormSubmissionHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputValue, emailInputValue, facultyInputValue, departmentInputValue, levelInputValue)
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
    <FancyBorder className="">
      <div className="form-box">
        <h2 className="register-heading">Register</h2>
        <form action="" onSubmit={FormSubmissionHandler}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              onChange={NameChangeHandler}
              value={nameInputValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              onChange={EmailChangeHandler}
              value={emailInputValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Faculty</label>
            <input
              type="text"
              className="form-input"
              placeholder="Faculty"
              onChange={FacultyChangeHandler}
              value={facultyInputValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Department</label>
            <input
              type="text"
              className="form-input"
              placeholder="Department"
              onChange={DepartmentChangeHandler}
              value={departmentInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Level</label>
            <input
              type="text"
              className="form-input"
              placeholder="Level"
              onChange={LevelChangeHandler}
              value={levelInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Date of Birth</label>
            <input
              type="date"
              className="form-input"
              onChange={DateHandler}
              value={dateInputValue}
            />
          </div>

          <div className="form-group">
            <button className="form-button">Submit</button>
          </div>
        </form>
      </div>
    </FancyBorder>
  );
};

export default Form;
