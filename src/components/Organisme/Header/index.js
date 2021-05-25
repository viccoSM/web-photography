import React from "react";
import { Button } from "../../atom";
import { Fade } from "react-reveal";

const Header = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light d-flex">
            <h3>Logo</h3>
            {/* <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
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
