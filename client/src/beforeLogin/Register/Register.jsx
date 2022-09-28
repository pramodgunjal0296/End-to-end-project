import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";

function template() {

  const {template}=this.state
  return (
    <div className="register container-fluid mb-5">
      <h1 className="mt-3 mb-4">Register</h1>
      {template}
      <div className="row">
          <div className="offset-sm-5 col-sm-7">
            <button onClick={this.fnRegister} className="btn btn-primary mr-3">Register</button>
            <Link to="/login"> Click Here to Login </Link>

          </div>
    </div>
    </div>
  );
};

export default template;
