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
            <h2 class="aondsl">A Notable Example in the Retail Industry:</h2>
            {/*<h2 class="aondsl">industry are given below</h2>*/}
          </div>
          <br />

          <div class="description-hidden">
            Companies like Otto, Ramraj, Faasos, Pothys, Saravana Stores, GRT,
            and Lalitha Jewelry have achieved significant success by putting
            their customers at the center of their business strategies. These
            brands focus on understanding evolving customer preferences, which
            has allowed them to build strong, lasting relationships with their
            audience.
            <br /> <br />
            By consistently meeting the needs of their diverse customer base,
            these companies have fostered loyalty, increased sales, and expanded
            their presence in competitive markets. Their success highlights the
            importance of prioritizing customer satisfaction as a key driver of
            growth and sustainability.
            <br /> <br />
            These examples show that a customer-centric approach is vital for
            success in the textile and retail industries.
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
