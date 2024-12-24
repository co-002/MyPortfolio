import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container d-flex justify-content-between py-3">
          <a class="navbar-brand" href="#">
            <h2>MyPortfolio</h2>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="ms-auto text-center">
              <ul class="navbar-nav d-flex m-0">
                <li class="nav-item mx-3 my-lg-0 my-2">
                  <a href="#home">Home</a>
                </li>
                <li class="nav-item mx-3 my-lg-0 my-2">
                  <a href="#Experience">Experience</a>
                </li>
                <li class="nav-item mx-3 my-lg-0 my-2">
                  <a href="#skills">Skills</a>
                </li>
                <li class="nav-item mx-3 my-lg-0 my-2">
                  <a href="#projects">Projects</a>
                </li>
                <li class="nav-item mx-3 my-lg-0 my-2">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
