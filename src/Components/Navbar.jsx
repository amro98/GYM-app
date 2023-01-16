import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-transperante">
      <div class="container-fluid my-2">
        <span class="navbar-brand px-3 h1 text-light fs-3">
          G<span class="h1 text-danger">Y</span>M
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarNav">
          <ul class="navbar-nav mx-auto w-50 d-flex justify-content-between ">
            <li class="nav-item">
              <a
                class="nav-link active text-danger fw-bold"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="/">
                Exercises
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link text-white fw-bold" href="/">Contact</a>
            </li>
          </ul>
          <div className="px-2">
            <button type="button" class="btn btn-outline-danger fw-bold ">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
