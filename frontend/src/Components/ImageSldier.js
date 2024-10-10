import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "./Form";

const ZoomableImageCarousel = () => {
  function AlertFunction() {
    alert("Hiii");
  }
  const [show, setShow] = useState(false);
  const [selectedTool, setSelectedTool] = useState({
    formTitle: "",
    reason: "",
  });

  // tools page:

  const handleShow = (toolName, actionType) => {
    setSelectedTool({ toolName, actionType });
    setShow(true);
  };
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const localStorageData = localStorage.getItem("Status");

  const allImages = [
    "./images/StoryBoardImages/p1.png",
    "./images/StoryBoardImages/p2.png",
    "./images/StoryBoardImages/p3.png",
    "./images/StoryBoardImages/p4.png",
    "./images/StoryBoardImages/p5.png",
    "./images/StoryBoardImages/p6.png",
    "./images/StoryBoardImages/p7.png",
    "./images/StoryBoardImages/p8.png",
    "./images/StoryBoardImages/p9.png",
    "./images/StoryBoardImages/p10.png",
    "./images/StoryBoardImages/p11.png",
    "./images/StoryBoardImages/p12.png",
    "./images/StoryBoardImages/p13.png",
    "./images/StoryBoardImages/p14.png",
    "./images/StoryBoardImages/p15.png",
    "./images/StoryBoardImages/p16.png",
    "./images/StoryBoardImages/p17.png",
  ];

  const [images, setImages] = useState(allImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (localStorageData === "loggedin") {
      setImages(allImages.slice(0, 17));
    } else {
      setImages(allImages.slice(0, 4));
    }
  }, [localStorageData]);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NextArrow = ({ onClick }) => {
    const handleClick = () => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (localStorageData === "loggedin") {
          return nextIndex;
        } else {
          if (nextIndex === 4) {
            // navigate("/aboutus?scrollTo=firstSectionRef");
            handleShow("Events", "download");
          }
          return nextIndex;
        }
      });
      onClick();
    };

    return (
      <div className="arrow next" onClick={handleClick}>
        <i className="fa">&#xf105;</i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    const handleClick = () => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex - 1;
        if (localStorageData === "loggedin") {
          return nextIndex;
        } else {
          if (nextIndex === 4) {
            // navigate("/aboutus?scrollTo=firstSectionRef");
            handleShow("Events", "download");
          }
          return nextIndex;
        }
      });
      onClick();
    };

    return (
      <div className="arrow prev" onClick={handleClick}>
        <i className="fa">&#xf104;</i>
      </div>
    );
  };

  const handleClose = () => setShow(false);

  // Carousel settings
  const settings = {
    swipe: false,
    draggable: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Function to update the zoom level
  const handleZoomChange = (newScale) => {
    setScale(newScale); // Update the current zoom level
  };

  // Function to handle wheel events
  const handleWheel = (e) => {
    if (scale > 1) {
      e.preventDefault(); // Prevent the default scrolling behavior
    }
  };

  return (
    <>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <TransformWrapper
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
                minScale={1}
                maxScale={3}
                onZoom={(e) => handleZoomChange(e.scale)} // Track the zoom level
                wheel={{ step: 0.1 }} // Enable zooming with wheel
                panning={{ velocity: 0.5 }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <div
                    onClick={(e) => e.stopPropagation()} // Prevent click from affecting slider
                    onWheel={handleWheel} // Custom wheel event handler
                  >
                    <TransformComponent>
                      <div className="ksoik34o34o34">
                        <img
                          id="iamgesizeodfthidi3434"
                          className="Imagsdiler"
                          src={image}
                          alt={`Zoomable ${index}`}
                          style={{
                            width: "100%", // Full width for responsiveness
                            objectFit: "contain", // Maintain aspect ratio
                          }}
                        />
                      </div>
                    </TransformComponent>

                    {/* Render zoom controls for mobile */}
                    {isMobile && (
                      <div className="zoom-controls">
                        <button
                          className="zoominbuttinsj43"
                          onClick={() => zoomIn()}
                        >
                          +
                        </button>
                        {/* Correctly invoke zoomIn */}
                        <button
                          className="zoomissnbuttinsj43"
                          onClick={() => zoomOut()}
                        >
                          -
                        </button>
                        {/* Correctly invoke zoomOut */}
                        <button
                          className="zereroominbuttinsj43"
                          onClick={() => resetTransform()}
                        >
                          Reset
                        </button>
                        {/* Correctly invoke resetTransform */}
                      </div>
                    )}
                  </div>
                )}
              </TransformWrapper>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <Modal
          id="contained-modal-title-vcenter"
          aria-labelledby="contained-modal-title-vcenter"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Please Join with us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              toolName={selectedTool.toolName}
              actionType={selectedTool.actionType}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ZoomableImageCarousel;
