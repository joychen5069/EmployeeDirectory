import React from "react";
import "./style.css";

function Employee(props) {
  return (


    <div>
      <h1>Test</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.department}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
