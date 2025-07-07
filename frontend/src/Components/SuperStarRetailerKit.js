import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "./Form";
import { useState } from "react";
export default function SuperStarRetailerKit() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selectedTool, setSelectedTool] = useState({
    formTitle: "",
    reason: "",
  });
  const handleClose = () => setShow(false);
  function linktoWhatsApp() {
    window.open("https://wa.me/c/919715593777", "_blank");
  }
  const handleShow = (toolName, actionType) => {
    setSelectedTool({ toolName, actionType });
    setShow(true);
  };
  return (
    <div>
      <div class="Superhundredvh">
        <div class="widthononeside">
          <div class="content">
            <div class="spandivv">
              <span>Superstar Retailer Kit: Your Path to Retail Success!</span>
            </div>
            <div>This powerful bundle includes:</div>
            <ul>
              <li>Ultimate Retailer Growth Planner</li>
              <li>Annamalai 2.0 Storyboard</li>
              <li>Dreams to Action</li>
            </ul>

            <div>
              Achieve your retail goals and unlock your full potential with the
              Superstar Retailer Kit!
            </div>
          </div>
          <div class="buttondivv">
            <button
              className="buttononwhypurchase"
              onClick={async () => {
                await handleShow("welcomeKit", "purchase");
              }}
            >
              Why To Purchase
            </button>
            <button onClick={linktoWhatsApp} type="submit" class="buttonclass">
              Purchase
            </button>
          </div>
        </div>
        <div class="Superimagedivv">
          {/* <img class="growthimg" src="./images/mockupImageNew.png" alt="" /> */}
          <img class="growthimg" src="./images/growth-ranjith-kit.png" alt="" />
        </div>
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
    </div>
  );
}
