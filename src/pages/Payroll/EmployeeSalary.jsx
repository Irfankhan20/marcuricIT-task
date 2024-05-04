import React from "react";
import { Col } from "react-bootstrap";
import { Form } from "react-router-dom";

const EmployeeSalary = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mt-2">
        <div>
          <h2>Employee Salary</h2>
          <p>Dashboard / Salary</p>
        </div>
        <div>
          <button
            type="button"
            class="waves-effect waves-light btn btn-primary mt-3"
          >
            + Add Salary
          </button>
        </div>
      </div>

      <div>
        <form></form>
      </div>
    </div>
  );
};

export default EmployeeSalary;
