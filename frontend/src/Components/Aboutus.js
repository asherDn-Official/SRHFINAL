import react from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "./Form";

export default function Aboutus() {
  useEffect(() => {
    AOS.init();
  });

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
          Join Our Superstar Retailer Family
        </div>

        <div className="jointsuperflex12">
          <div className="joinoutsuperkitparagaraph">
            Welcome to the Superstar Retailer Hub (SRH) – a dynamic community
            where passionate retailers come together to grow, learn, and thrive.
            At SRH, we believe in the power of collaboration and shared
            knowledge to unlock the true potential of every retailer, whether
            you’re just starting out or looking to take your business to the
            next level.
          </div>
        </div>

        <div className="imageflexdiv">
          <img
            className="groupphotoimagesssrkit"
            src="./images/pikaso_texttoimage_A-community-group-photo.webp"
            alt=""
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "#ec396f",
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 20,
              textAlign: "center",
              border: "none",
              padding: "15px 30px",
              borderRadius: "25px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() =>
              window.open("https://nas.io/superstar-retailers-hub", "_blank")
            }
          >
            Join the Community
          </button>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="800">
        <div className="mainformdivcontainers" ref={firstSectionRef}>
          <div className="CommunityForm">Join Our Family</div>
          <div className="coummunityflexdiv">
            <div className="communitytextpara">
              Become a part of the Superstar Retailer Family! Join us today and
              unlock exclusive resources, insights, and support to help your
              retail business thrive.
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
          <a
            href="https://calendly.com/growthranjith/1-1-meeting-with-growth-ranjith-30-min-clone"
            target="_blank"
            class="cta-button"
          >
            Contact our Expert
          </a>
        </div>
        <div class="banner-image">
          {/* <img
            data-aos="fade-up"
            data-aos-delay="700"
            src="./images/ranjithwithloptop.webp"
            alt="Business expert with laptop"
          /> */}
          <img
            data-aos="fade-up"
            data-aos-delay="700"
            src="./images/aboutus-ranjith.png"
            alt="Business expert with laptop"
          />
        </div>
      </div>
      {/* <iframe
        title="SUPERSTAR_RETAILERS_HUB checkout widget"
        src="https://nas.io/checkout-widget?communityCode=SUPERSTAR_RETAILERS_HUB&communitySlug=%2Fsuperstar-retailers-hub&buttonText=Join%20as%20member&buttonTextColorHex=%23ffffff&buttonBgColorHex=%23ec396f&widgetTheme=light&backgroundColorHex=%23fff"
        width="100%"
        height="320"
        frameborder="0"
        referrerpolicy="no-referrer"
      ></iframe> */}
    </div>
  );
}
