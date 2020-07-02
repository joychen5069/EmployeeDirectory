import React, { Component } from 'react';
import Title from "./components/Title"
import Employee from "./components/Employees";
// import Wrapper from "./components/Wrapper"
import './App.css';
import employees from './employees.json';

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <>
        <Title>Employees</Title>
        <div>
          {this.state.employees.map(employee => {
            return (
              <Employee
                id={employee.id}
                key={employee.id}
                name={employee.name}
                department={employee.department}
                phone={employee.phone}
                email={employee.email}
              />
            )
          })}
        </div>
      </>
    );
  }
}

export default App;