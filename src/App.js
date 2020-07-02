import React from 'react';
import Title from "./components/Title"
import Employee from "./components/Employees";
import './App.css';
import employees from './employees.json';

function App() {
  return (
    <div>
      <Title>Employees</Title>
      <div className="container">
        <Employee 
        name={employees[0].name}
        department={employees[0].department}
        phone={employees[0].phone}
        email={employees[0].email}/>
      </div>
    </div>
  );
}

export default App;