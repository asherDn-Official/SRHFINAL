import React, { useEffect } from "react";
import JSConfetti from "js-confetti";
import { useNavigate } from "react-router-dom";

const ConfettiComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }, []);

  function homePageRedirect() {
    navigate("/?scrollTo=lastSection");
  }
  return (
    <div>
      <header class="hidden-hidden">
        <div class="image-container-hidden">
          <img src="./images/prodsonf.webp" alt="Smiling Man" />
        </div>
        <div class="content-hidden">
          <div class="title-hidden">
            <h2 class="aondsl">Few notable examples in the textile</h2>
            <h2 class="aondsl">industry are given below</h2>
          </div>
          <br />

          <div class="description-hidden">
            The following are the few notable examples Arvind Limited, along
            with brands like Otto, Ramraj, Faaso, Pothys, Saravana Stores, and
            leading jewelry brands such as GRT and Lalitha Jewelry, have
            successfully focused on producing high-quality tailored solutions,
            embracing sustainability, and launching direct-to-consumer
            initiatives. This strategic shift allowed these companies to tap
            into evolving consumer preferences, resulting in increased sales and
            stronger customer loyalty.
          </div>
          <div className="dispsjkskskj232">
            <br />
            <br />
          </div>

          <button class="back-button" onClick={homePageRedirect}>
            Back {`<<`}
          </button>
        </div>
      </header>
    </div>
  );
};

export default ConfettiComponent;
