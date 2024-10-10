import react from "react";

import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "./Form";

export default function Aboutus() {
  const firstSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Get the value of the 'scrollTo' query parameter
    const scrollTo = new URLSearchParams(location.search).get("scrollTo");

    // Check if the query parameter is 'firstSectionRef' and scroll to that section
    if (scrollTo === "firstSectionRef") {
      firstSectionRef.current?.scrollIntoView({});
    }
  }, [location]);
  return (
    <div>
      <div className="ssrkitbackground">
        <div className="joinoursuperkitpagefinal">
          Join Our Superstar Retailer Community
        </div>

        <div className="jointsuperflex12">
          <div className="joinoutsuperkitparagaraph">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
            className aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </div>
        </div>
        <div className="imageflexdiv">
          <img
            className="groupphotoimagesssrkit"
            src="./images/pikaso_texttoimage_A-community-group-photo.webp"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="mainformdivcontainers" ref={firstSectionRef}>
          <div className="CommunityForm">Join Our Family</div>
          <div className="coummunityflexdiv">
            <div className="communitytextpara">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
              className aptent taciti sociosq
            </div>
          </div>
          <div>
            <div>
              <Form toolName="welcome" actionType="welcome" />
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="banner-content">
          <h2>Connect with our Expert</h2>
          <p>Get personalized advice and solutions for your business needs.</p>
          <a href="#" class="cta-button">
            Contact our Expert
          </a>
        </div>
        <div class="banner-image">
          <img
            src="./images/ranjithwithloptop.png"
            alt="Business expert with laptop"
          />
        </div>
      </div>
    </div>
  );
}
