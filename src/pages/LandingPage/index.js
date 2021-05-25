import React from "react";
import { Button } from "../../components/atom";
import { Footer, Header, Hero } from "../../components/Organisme";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default LandingPage;
