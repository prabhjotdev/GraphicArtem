import React, { Component } from "react";
import history from '../../history';
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div class="bs-example">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" onClick={()=>history.push('/Home')} class="nav-item nav-link active">
                Home
              </a>
              <a href="#" class="nav-item nav-link">
                Username
              </a>
              <a href="#" onClick={()=>history.push('/Assets')} class="nav-item nav-link">
                Assets
              </a>
              <a href="#" onClick={()=>history.push('/Cart')} class="nav-item nav-link" tabindex="-1">
                Cart
              </a>
            </div>
            <div class="navbar-nav ml-auto">
              <a href="#" onClick={()=>history.push('/')} class="nav-item nav-link">
                Logout
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
