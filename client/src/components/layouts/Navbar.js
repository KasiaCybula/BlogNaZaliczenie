import React from "react";
import styled from "styled-components";
import logo from "../../logo1.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{ width: "60px" }} src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;

//Main Navbar Container

const NavbarContainer = styled.div`
  background: var(--dark-violet);

  .nav-link {
    color: #fff !important;
    font-size: 18px;
    font-family: "Comfortaa", cursive !important;
    &:hover {
      background: var(--light-lavender);
    }
  }
`;
