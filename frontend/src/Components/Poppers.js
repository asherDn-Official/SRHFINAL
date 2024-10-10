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
          <img src="./images/prodsonf.png" alt="Smiling Man" />
        </div>
        <div class="content-hidden">
          <div class="title-hidden">
            <h2 class="aondsl">A notable example in the textile</h2>
            <h2 class="aondsl">industry is Arvind Limited.</h2>
          </div>
          <br />

          <div class="description-hidden">
            Arvind Limited, initially focused on producing high-quality tailored
            solutions, focusing on sustainability, and launching
            direct-to-consumer brands like Flying Machine. This transition
            allowed them to tap into changing consumer preferences, leading to
            increased sales and stronger customer loyalty.
          </div>
          <div className="dispsjkskskj232">
            <br />
            <br />
            <br />
          </div>

          <button class="back-button" onClick={homePageRedirect}>
            Back {`>>`}
          </button>
        </div>
      </header>
    </div>
  );
};

export default ConfettiComponent;
