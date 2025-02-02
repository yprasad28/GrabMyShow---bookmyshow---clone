import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className="heading">GrabMyShow!</h1>
          </div>
          <div className="col-4 mt-3">
            <input type="search" placeholder="Search for movies" className="search" />
          </div>
          <div className="col-4">
            <nav>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active navItem" aria-current="page" href="#">
                    Location
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navItem" href="#">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navItem" href="#">
                    Tickets
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navItem" aria-disabled="true">
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
    </header>
    
  );
}

export default Header;
