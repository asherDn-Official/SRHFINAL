import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Imageslider from "./Image-Slider";
import StoryBoard from "./StoryBoard";
import JSConfetti from "js-confetti";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  useEffect(() => {
    AOS.init();
  });
  const navigate = useNavigate();

  const location = useLocation();

  const lastSectionRef = useRef(null);

  function SucessfullReatiler() {
    navigate("/sucessfull-retailer");
  }

  function homePageRedirect() {
    navigate("/");
  }

  useEffect(() => {
    const hash = new URLSearchParams(location.search).get("scrollTo");
    if (hash === "lastSection") {
      lastSectionRef.current?.scrollIntoView({});
    }
  }, [location]);

  return (
    <div>
      <div className="videostyklebsavjhsd">
        <video
          onClick={SucessfullReatiler}
          className="homePageHeroVideo"
          src="./images/Gr-Website-Video-Compressed.mp4"
          controls
          autoPlay
          muted
          loop
          id="myVideo"
          style={{ cursor: "pointer" }}
        ></video>
        {/* <button className="button-speech-bubble" onClick={SucessfullReatiler}>
          Click here to Know the Answer <span> &gt;&gt; </span>
        </button> */}
      </div>
      {/* <div className="container-speech-bubble" data-aos="fade-up">
        <div className="comparison-speech-bubble" ref={lastSectionRef}>
          <div className="person-speech-bubble">
            <img
              src="./images/SRHHeroBannerLeftImage.webp"
              alt="Product Focus Person"
            />
          </div>
          <div className="person-speech-bubble">
            <img
              src="./images/SRHHeroBannerRightImage.webp"
              alt="Customer Focus Person"
            />
          </div>
        </div>
        <div className="question-speech-bubble">
          Who will be Successful in Retail Market ?
        </div>
        <button className="button-speech-bubble" onClick={SucessfullReatiler}>
          Click here to Know the Answer <span> &gt;&gt; </span>
        </button>
      </div> */}

      <div className="banner-container">
        <div className="star-container">
          <img
            src="./images/material-symbols_star.png"
            alt="Star"
            className="star"
          />
          <img
            src="./images/material-symbols_star.png"
            alt="Star"
            className="star"
          />
          <img
            src="./images/material-symbols_star.png"
            alt="Star"
            className="star"
          />
        </div>
        <div className="text-container">
          <div className="moving-text">
            "If you win over a customer, they will feel the love."
            <span style={{ marginLeft: "50px" }}>
              "வாடிக்கையாளரைப் பெற்றால் அன்பை உள்ளுணர்வார்"
            </span>
          </div>
        </div>
        <div className="star-container">
          <img
            src="./images/material-symbols_star.png"
            alt="Star"
            className="star"
          />
          <img
            src="./images/material-symbols_star.png"
            alt="Star"
            className="star"
          />
          <img
            src="./images/material-symbols_star.png"
            alt="Star"
            className="star"
          />
        </div>
      </div>

      <Imageslider data-aos="fade-up" />

      <div>
        <div>
          <div>
            <div className="whysuperstarRetaierhub" data-aos="zoom-in-up">
              <div className="superstarwhyimg">
                <video
                  className="superstarkitgif"
                  src="./images/Rajini Animated.webm"
                  controls
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                ></video>
              </div>
              <div className="superstarwhydiv1">
                <div className="whysuperstarheading">
                  Why SuperStar Retailers Hub?
                </div>
                <div className="superstarwhy">
                  {/* At SuperStar Retailers Hub, we believe that every Retail
                  business deserves a chance to shine. Our goal is to help small
                  retailers grow by focusing on what matters most—their
                  customers. We provide tools and strategies that are easy to
                  understand and apply, so that even a beginner can use them to
                  improve their business. */}
                  We at SuperStar Retailers Hub believe that any Retail business
                  deserves a chance to shine. One thing is more important than
                  everything else, and that is one's customers. So we try to
                  provide tools and strategies, easy to understand and apply
                  even for a beginner, to make them useful in his quest for
                  improving business.
                </div>
                <div className="superstarwhy1">
                  {/* Our mission is simple: to help small businesses connect better
                  with their customers and grow steadily. We want to make sure
                  that every small business owner, like myself, can overcome
                  challenges and achieve their dreams. */}
                  We feel that our mission is self-explanatory: to connect Small
                  & medium businesses and allow them to touch base with their
                  customers and steadily grow. Our desire is to help ensure that
                  every small business owner becomes able to overcome any
                  obstacles and work towards his/her dream, as my company had to
                  do.
                </div>
                <div className="superstarwhy2">
                  Join us on this journey to growth and success!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-solve">
          <h1 className="whatwesolvediv">What we Solve</h1>
          <div class="card-container">
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/Group 789.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Time - Not Enough Hours in the Day
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/Group 789.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    Running a retail business is demanding, but we streamline
                    your operations so you can focus on growth and family. Let
                    us handle the details while you focus on what matters.
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/secondImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Team - Struggling to Find Skilled Help
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/secondImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    Finding a team that shares your vision and dedication can be
                    challenging. We help you build and train a skilled team, so
                    you never feel like you’re going it alone.
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/thirdImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Cost - Marketing Feels Like a Expense Trap
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/thirdImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    Marketing expenses can quickly add up without visible
                    results. We make sure every rupee you spend on marketing
                    works harder for you, helping you reach your goals without
                    wasting money
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/fourthImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Service Provider - Find Reliable Partners
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/fourthImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    Finding the right service providers can be a headache. We
                    connect you with trusted professionals who deliver results,
                    so you can breathe easy.
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/fifthImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Retention - Customers Aren’t Coming Back
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/fifthImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    {/* You work hard to get customers, but keeping them can be
                    tough. We help you create lasting relationships with your
                    customers, turning them into loyal fans who keep coming
                    back. */}
                    You work hard to get customers, but keeping them can be
                    tough. We help create lasting relationships, turning them
                    into loyal fans who keep coming back
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/sixthImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Acquisition - Difficulty Gaining New Customers
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/sixthImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    Bringing in new customers is vital for growth, but it’s
                    easier said than done. We provide strategies that draw in
                    fresh faces, boosting your business.
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/seventhImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Community - Feeling Out of Business Support
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/seventhImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    A strong community can be the backbone of your business. We
                    help you build and nurture a supportive network that stands
                    by you through thick and thin.
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/eightImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Not Aware of Omnipresence
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/eightImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    It makes your brand easy to find—on social media, in-store,
                    WhatsApp, calls. We help you stay top of mind everywhere
                    your customers are, boosting visibility and growth.
                  </div>
                </div>
              </div>
            </div>
            <div class="card-wrapper">
              <div class="card light">
                <div class="text-overlay">
                  <img
                    class="firstdideimagee"
                    src="images/ninthImageHover.png"
                    alt=""
                  />
                  <div class="details-text">
                    <div class="newCardTextContent">
                      Challenges in Building Loyalty
                    </div>
                  </div>
                </div>
                <div class="purchase-button-container">
                  <img
                    class="seocndimagesection"
                    src="images/ninthImageHover.png"
                    alt=""
                  />
                  <div class="secondsidecardimagesection">
                    Building loyalty takes more than just good products. We show
                    you how to create a connection that makes customers feel
                    valued and keeps them coming back
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <StoryBoard />
        </div>
      </div>
      <div className="container-ranjith" data-aos="fade-up">
        <div className="image-ranjith">
          <img src="./images/GrowthRanjithCEO.webp" alt="Ranjith" />
        </div>
        <div className="text-ranjith">
          <div className="title-ranjith">Growth Ranjith's Journey:</div>
          <div className="subtitle-ranjith">From Struggles to Success</div>
          <p className="paragraph-ranjith">
            <span>I'm Growth Ranjith </span> <br />
            <span>Customer Growth Expert </span>
            <br /> I started my own communication company when I was just 18
            years old. Being the first in my family to go to college and
            graduate, I learned the value of building strong connections with
            customers through my own experiences.
          </p>
          <p className="paragraph-ranjith">
            <span>Turning Point :</span> <br />
            During the pandemic, big companies survived thanks to strong
            customer data management and connections, while small Retail
            businesses struggled.
          </p>
          <p className="paragraph-ranjith">
            <span>Growth Path : </span> <br /> As a Customer Growth Expert, I
            created programs to help small and medium retail businesses grow
            through Customer Focus approaches and founded the SuperStar
            Retailers Hub.
          </p>
        </div>
      </div>
    </div>
  );
}
