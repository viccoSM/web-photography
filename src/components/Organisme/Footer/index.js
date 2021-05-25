import React from "react";
import Copyright from "../../../assets/images/icon-copyright.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container ">
        <div className="d-flex justify-content-center">
          <p>
            <img src={Copyright} alt="" />
            2021 viccoSM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
