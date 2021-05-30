import React from "react";
import { Button } from "../../atom";
import { Fade } from "react-reveal";
import { SearchBar } from "../../molekul";

const Header = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.home)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light d-flex">
              <Button type="link" href="/home">
                <h3>Logo</h3>
              </Button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <SearchBar></SearchBar>
                  </li>
                  <li className="nav-item">
                    <Button className="btn" type="link" href="/home">
                      <h5 className="fw-light">Home</h5>
                    </Button>
                    <Button className="btn" type="link" href="/profile">
                      <h5 className="fw-light">Profile</h5>
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light d-flex">
            <Button type="link" href="/">
              <h3>Logo</h3>
            </Button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Button
                    className="btn "
                    isPrimary
                    hasShadow
                    type="link"
                    href="/signup"
                  >
                    Sign Up
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    className="btn"
                    isSecondary
                    hasShadow
                    type="link"
                    href="/signin"
                  >
                    Sign In
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
