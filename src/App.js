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
        <div className="container">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
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
            </table>
        </div>
      </>
    );
  }
}

export default App;