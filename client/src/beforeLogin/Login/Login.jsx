import "./Login.css";
import React from "react";
import './Login.css';
import { Link } from "react-router-dom";


function template() {

  const {template}=this.state;
  return (
    <div className="login container-fluid">
      <h1 className="mt-3 mb-5">Login</h1>
        {template}
        <div className="row">
          <div className="offset-sm-5 col-sm-7">
            <button onClick={this.fnLogin} className="btn btn-primary mr-3">Login</button>
            <Link to="/register"> Click Here to Register </Link>

          </div>


          
        </div>
        
    </div>
  );
};

export default template;
