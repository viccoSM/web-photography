import React from "react";
import Frame from "../../../assets/images/frame-profile.png";

const Profile = (props) => {
  return (
    <div className="profile ms-5">
      <div className="row">
        <div className="col">
          <div className="img-profile">
            <img
              src={props.imgUrl}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{
                width: 245,
                height: 335,
                zIndex: 1,
                margin: "20px 0px 0px 20px",
              }}
            />
            <img
              src={Frame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ width: 245, height: 335 }}
            />
          </div>
        </div>

        <div className="col align-self-center">
          <div className="info-profile">
            <h5 style={{ fontSize: 24, fontWeight: "bold" }}>{props.name}</h5>
            <h5 style={{ fontSize: 24, fontWeight: "lighter" }}>
              {props.email}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
