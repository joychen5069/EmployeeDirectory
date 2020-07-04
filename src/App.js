import React, { Component } from 'react';
import Title from "./components/Title"
import Employee from "./components/Employees";
import Form from "./components/Form"
import './App.css';
import orderBy from 'lodash/orderBy';
import employees from './employees.json';

class App extends Component {
  state = {
    employees,
    filteredEmployees: employees,
    ascending: true
  };

  sortName = () => {

    const { filteredEmployees, ascending } = this.state
    console.log(filteredEmployees);
    console.log(ascending);
    const direction = ascending ? 'asc' : 'desc'
    const sorted = orderBy(filteredEmployees, 'name', direction);
    console.log(sorted)
    this.setState({ filteredEmployees: sorted, ascending: !ascending })


    console.log("clicked")

  }


  render() {
    return (
      <>
        <Title>Employee Directory</Title>

        <div className="container">
          <Form />
          <table className="table" id="table">
            <thead>
              <tr className="header">
                <th scope="col" onClick={this.sortName}>Name</th>
                <th scope="col">Department</th>
                <th scope="col" >Phone Number</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {this.state.filteredEmployees.map(employee => {
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