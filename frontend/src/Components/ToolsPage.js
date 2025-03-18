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
  const API_URI = "https://superstarretailer.com";
  // const API_URI = "https://superstarretailer.com";
  // tools page:
  const handleClose = () => setShow(false);
  const handleShow = (toolName, actionType) => {
    setSelectedTool({ toolName, actionType });
    setShow(true);
  };
  const handleDownload = (reason) => {
    const link = `${API_URI}/${reason}.xlsx`;
    const a = document.createElement("a");
    a.href = link;
    a.download = `${reason}.xlsx`; // Specify the file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div>
      <div>
        <div className="hero-tool">
          <div className="container-tool hero-content-tool">
            <div className="content-tool">
              <h1>
                {/* Unlocking Potential: */}
                <br />
                Purpose of the Tools :
              </h1>
              <p className="paratool">
                The SuperStar Retailers tools help businesses improve by
                measuring Average Order Value and identifying key customers and
                products using the 80-20 Rule, while the 5 Whys technique
                uncovers root causes of problems.
              </p>

              <h1>
                {/* Unlocking Potential: */}
                <br />
                Benefits of the Tools :
              </h1>
              <p className="paratool">
                These tools enable businesses to increase revenue through
                upsells, focus on top customers and products, and quickly solve
                issues to enhance operations.
              </p>

              <h1>
                {/* Unlocking Potential: */}
                <br />
                Overall Impact
              </h1>
              <p className="paratool">
                Together, these tools provide valuable insights that help
                retailers make smart decisions and grow their businesses
                successfully.
              </p>

              <p className="tagline-tool">
                Nurture | Guide | Optimize | Support | Transform
              </p>
              {/* <div className="buttondivvintools">
                <button className="buttonontools">Download</button>
              </div> */}
            </div>
            <div className="image-tool">
              <img
                className="photo-images"
                src="./images/GrowthToolImage.jpeg"
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
                  onClick={async () => {
                    await handleShow("cartValue", "DirectDownload");
                    //handleDownload("cartValue");
                  }}
                  class="tool-button"
                >
                  Download
                </button>
                <button
                  onClick={() => handleShow("cartValue", "download")}
                  class="tool-button"
                >
                  Share to whatsapp
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
                  onClick={async () => {
                    await handleShow("80-20", "DirectDownload");
                    // handleDownload("80-20");
                  }}
                  class="tool-button"
                >
                  Download
                </button>
                <button
                  onClick={() => handleShow("80-20", "download")}
                  class="tool-button"
                >
                  Share to whatsapp
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
                  onClick={async () => {
                    await handleShow("5why", "DirectDownload");
                    // handleDownload("5why");
                  }}
                  class="tool-button"
                >
                  Download
                </button>
                <button
                  onClick={() => handleShow("5why", "download")}
                  class="tool-button"
                >
                  Share to whatsapp
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
