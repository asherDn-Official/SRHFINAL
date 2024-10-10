import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Imageslider from "./Image-Slider";
import StoryBoard from "./StoryBoard";
import JSConfetti from "js-confetti";

export default function Homepage() {
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
          className="homePageHeroVideo"
          src="./images/Gr-Website-Video-Compressed.mp4"
          controls
          autoPlay
          muted
          loop
          id="myVideo"
        ></video>
      </div>
      <div className="container-speech-bubble">
        <div className="comparison-speech-bubble" ref={lastSectionRef}>
          <div className="person-speech-bubble">
            <img
              src="./images/SRHHeroBannerLeftImage.png"
              alt="Product Focus Person"
            />
          </div>
          <div className="person-speech-bubble">
            <img
              src="./images/SRHHeroBannerRightImage.png"
              alt="Customer Focus Person"
            />
          </div>
        </div>
        <div className="question-speech-bubble">
          Who will be Successful in Retail Market
        </div>
        <button className="button-speech-bubble" onClick={SucessfullReatiler}>
          Click here to Know the Answer <span> &gt;&gt; </span>
        </button>
      </div>

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

      <Imageslider />

      <div>
        <div>
          <div>
            <div className="whysuperstarRetaierhub">
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
                  At SuperStar Retailers Hub, we believe that every Retail
                  business deserves a chance to shine. Our goal is to help small
                  retailers grow by focusing on what matters most—their
                  customers. We provide tools and strategies that are easy to
                  understand and apply, so that even a beginner can use them to
                  improve their business.
                </div>
                <div className="superstarwhy1">
                  Our mission is simple: to help small businesses connect better
                  with their customers and grow steadily. We want to make sure
                  that every small business owner, like myself, can overcome
                  challenges and achieve their dreams.
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
                      Cost - Marketing Feels Like a Money Pit
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
                    Marketing expenses can skyrocket without clear results. We
                    optimize your marketing efforts to ensure every rupee spent
                    brings you closer to your goals.
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
                      Community - Feeling Disconnected
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
                      Omnipresence - Multitasking Overload
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
                    Being present across all platforms is overwhelming. We
                    create a strategy that makes your brand visible and
                    influential, wherever your customers are.
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
      <div className="container-ranjith">
        <div className="image-ranjith">
          <img src="./images/Group 742.png" alt="Ranjith" />
        </div>
        <div className="text-ranjith">
          <div className="title-ranjith">Growth Ranjith's Journey:</div>
          <div className="subtitle-ranjith">From Struggles to Success</div>
          <p className="paragraph-ranjith">
            Hi there, I'm Ranjith. My journey hasn't been easy. I didn't have a
            safety net or support system. I had to carve my own path, starting
            from zero. There was a turning point in my life that I named the
            "Annamalai Challenge." It was the springboard that propelled my
            growth. With a humble starting salary of Rs.1500, I now bring home
            an income in lakhs. I've even bought a 1.5 crore house for my mom.
          </p>
          <p className="paragraph-ranjith">
            At 18, I started my own communications company. I was the
            trailblazer in my family, the first to attend and graduate college.
            It was through all this that I grasped how crucial nurturing solid
            customer relationships can be.
          </p>
          <p className="paragraph-ranjith">
            During the COVID-19 wave, well-established corporate companies had a
            cushion - their strong data management and connections. In contrast,
            small-scale retail businesses found it tougher to cope. I put on my
            Customer Growth Expert hat and saw this gap as a window of
            opportunity. I set up programs designed to help these retail
            businesses expand by focusing on customers. From this idea, the
            SuperStar Retailers Hub was born.
          </p>
        </div>
      </div>
    </div>
  );
}
