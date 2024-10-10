import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "./Form";

export default function ToolsPage() {
  const [show, setShow] = useState(false);
  const [selectedTool, setSelectedTool] = useState({
    formTitle: "",
    reason: "",
  });

  // tools page:
  const handleClose = () => setShow(false);
  const handleShow = (toolName, actionType) => {
    setSelectedTool({ toolName, actionType });
    setShow(true);
  };

  return (
    <div>
      <div>
        <div className="hero-tool">
          <div className="container-tool hero-content-tool">
            <div className="content-tool">
              <h1>
                Unlocking Potential:
                <br />
                Your Pathway to Retail Excellence
              </h1>
              <p className="paratool">
                Welcome to SuperStar Retailers Hub! We’re here to empower your
                business growth every step of the way. Our specialized tools and
                resources are designed to help you refine strategies, streamline
                operations, and seize new market opportunities. We understand
                the challenges retailers face and are committed to making your
                journey smoother and more rewarding. With our guidance, you can
                confidently tackle business hurdles and achieve your goals.
                Let’s transform challenges into successes together!
              </p>
              <p className="paratool">
                We recognize the challenges you face daily and are dedicated to
                making your retail experience as rewarding as possible. With our
                tailored support, you can seamlessly navigate through the
                complexities of business management, ensuring that every
                decision leads you closer to your goals. Let's embark on this
                path of continuous learning and improvement together,
                transforming challenges into stepping stones for success.
              </p>
              <p className="tagline-tool">
                Nurture | Guide | Optimize | Support | Transform
              </p>
            </div>
            <div className="image-tool">
              <img
                className="photo-images"
                src="./images/toolsimages.png"
                alt="Businessman reviewing documents"
              />
            </div>
          </div>
        </div>
        <div class="all-for-one">
          <div class="growth-tool-section">
            <h2 class="section-title">Growth Tool</h2>
            <div class="tool-item">
              <img
                src="./images/purchars.png"
                alt="Cart Value"
                class="tool-image"
              />
              <div class="tool-content">
                <h3 class="tool-title">
                  Cart Value (AOV - Average Order Value)
                </h3>
                <p class="tool-description">
                  Measures the average spend per order. Increase AOV by
                  promoting upsells, cross-sells, or bundles to boost revenue.
                </p>
                <button
                  onClick={() => handleShow("Events", "download")}
                  class="tool-button"
                >
                  Download
                </button>
              </div>
            </div>
            <div class="tool-item">
              <img
                src="./images/haindls.png"
                alt="80-20 Rule"
                class="tool-image3"
              />
              <div class="tool-content">
                <h3 class="tool-title">80-20 Rule (Pareto Principle)</h3>
                <p class="tool-description">
                  States that 80% of outcomes come from 20% of key causes.
                  Identify top customers or products; focus on these to drive
                  more growth efficiently.
                </p>
                <button
                  onClick={() => handleShow("Events", "download")}
                  class="tool-button"
                >
                  Download
                </button>
              </div>
              <img
                src="./images/haindls.png"
                alt="80-20 Rule"
                class="tool-image1"
              />
            </div>
            <div class="tool-item">
              <img
                src="./images/question.png"
                alt="5 Whys"
                class="tool-image"
              />
              <div class="tool-content">
                <h3 class="tool-title">5 Whys</h3>
                <p class="tool-description">
                  A method for finding the root cause of a problem by asking
                  "Why?" repeatedly, until the fundamental issue is uncovered.
                </p>
                <button
                  onClick={() => handleShow("Events", "download")}
                  class="tool-button"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="allbuttoncontainer">
          <div className="container-tool">
            <h2 className="headineh2">Growth Tool</h2>

            <div className="growth-tool">
              <h3 className="headingh3sonf">
                Cart Value (AOV - Average Order Value)
              </h3>
              <p className="paratool-tool">
                Measures the average spend per order. Increase AOV by promoting
                upsells, cross-sells, or bundles to boost revenue.
              </p>
              <button
                onClick={() => handleShow("Events", "download")}
                className="download-btn-tool"
              >
                Download
              </button>
            </div>

            <div className="growth-tool">
              <h3 className="headingh3sonf">80-20 Rule (Pareto Principle)</h3>
              <p className="paratool-tool">
                States that 80% of outcomes come from 20% of key causes, like
                top customers or products. Focus on these to drive more growth
                efficiently.
              </p>
              <button
                onClick={() => handleShow("Events", "download")}
                className="download-btn-tool"
              >
                Download
              </button>
            </div>

            <div className="growth-tool">
              <h3 className="headingh3sonf">5 Whys :</h3>
              <p className="paratool-tool">
                A method for finding the root cause of a problem by asking
                "Why?" repeatedly until the fundamental issue is uncovered.
              </p>
              <button
                onClick={() => handleShow("Events", "download")}
                className="download-btn-tool"
              >
                Download
              </button>
            </div>
          </div>
        </div> */}

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
      </div>
    </div>
  );
}
