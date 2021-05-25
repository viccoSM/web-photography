import React from "react";
import ImgHero from "../../../assets/images/imgHero.png";
import { Button } from "../../atom";

const index = () => {
  return (
    <section className="hero container">
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 style={{ fontWeight: "bold", fontSize: 64 }}>
            Upload Your Street <br /> Photgraphy
          </h1>
          <p>
            Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
            <br /> sed diam nonumy eirmod t empor invidunt ut labore et dolore
            magna
          </p>
          <Button
            isPrimary
            className="btn"
            type="link"
            hasShadow
            href="/signup"
          >
            Sign Up
          </Button>
        </div>
        <div className="col-6">
          <div className="img-cover" style={{ height: 600 }}>
            <img
              src={ImgHero}
              alt="Room with couches"
              className="img-fluid position-abusolute"
              style={{ margin: "0px 0 100px 0", zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
