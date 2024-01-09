import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      currentDate: new Date(),
    }
  }
  render() {
    
    return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="">
            Navbar
          </Link>
          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"  // Add '#' here
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" />
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/" style={{ cursor: 'pointer' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" style={{ cursor: 'pointer' }}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={{ cursor: 'pointer' }}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={{ cursor: 'pointer' }}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={{ cursor: 'pointer' }}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{ cursor: 'pointer' }}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{ cursor: 'pointer' }}>
                  Technology
                </Link>
              </li>
              <li className="nav-item" style={{ color: 'white' }} >
              
              </li>
            </ul>
          </div>
        </nav>
        <div className="sticky-top">
        <div style={{ textAlign: "center" }}>
          <h2>NewsMedia - Top Headlines on {this.state.category}</h2>
          <p>{this.state.currentDate.toLocaleString("en-In")}</p>
          
        </div>
      </div>
      </div>
    );
  }
}
