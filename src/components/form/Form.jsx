import React, { useState } from 'react';
import INPUT_DATA from '../../data/INPUT_DATA.json';
import DROPDOWN_DATA from '../../data/DROPDOWN_DATA.json';
import icoAdd from '../../assets/ico-user-add.jpg';
import './form.css';
import Input from '../input/Input';
import Dropdown from '../dropdown/Dropdown';

const Form = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        street: '',
        city: '',
        zipCode: '',
        stateAbbrev: '',
        startDate: '',
        department: '',
      };

    const [newEmployee, setNewEmployee] = useState(initialState); 

    
  // ON CHANGE
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() });
  };

  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList'));

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // update data
    employeesList.push(newEmployee);

    // complete / correct data
    newEmployee.id = employeesList.length;
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.replace(/-/g, '/');
    newEmployee.startDate = newEmployee.startDate.replace(/-/g, '/');

    // store data
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList));

    // reset form
    setNewEmployee({ ...newEmployee }, e.target.reset());

  };

    return (
        <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
        <img
          className="form-newEmployee--ico"
          src={icoAdd}
          alt="add employee icon"
        />
  
        {INPUT_DATA.map((data, index) => {console.log(data)})};
        {INPUT_DATA.map((data, index) => (
          <Input
            key={index}
            type={data.type}
            className={data.className}
            htmlFor={data.id}
            label={data.label}
            id={data.id}
            value={newEmployee[index]}
            handleChange={handleChange}
            autoComplete="off"
          />  
        ))}
  
        <fieldset
          id="addressContainer"
          className="form-newEmployee--addressContainer"
        >
          <legend className="form-newEmployee--addressGroup">Address</legend>
        </fieldset>
  
        {DROPDOWN_DATA.map((data, index) => {console.log(data)})};  
        {DROPDOWN_DATA.map((data, index) => (
          <Dropdown
            key={index}
            type={data.type}
            className={data.className}
            htmlFor={data.id}
            label={data.label}
            id={data.id}
            select={data.select}
            handleChange={handleChange}
          />
        ))}
  
        <button
          type="submit"
          className="submit form-newEmployee--submit"
        >
          Save
        </button>
  
      </form>
    );
};

export default Form;