import React from "react";
import { Header, Hero } from "../../components/Organisme";
import Profile from "../../config/json/profile.json";

const HOme = () => {
  return (
    <>
      <Header home />
      <Hero home data={Profile.profile} />
    </>
  );
};

export default HOme;
