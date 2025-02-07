import { Link, useNavigate } from "react-router-dom";
export default function SuperStarRetailerKit() {
  const navigate = useNavigate();

  function linktoWhatsApp() {
    window.open("https://wa.me/c/919715593777", "_blank");
  }
  return (
    <div>
      <div class="Superhundredvh">
        <div class="Superimagedivv">
          <img class="growthimg" src="./images/mockupImageNew.png" alt="" />
        </div>
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
            <button onClick={linktoWhatsApp} type="submit" class="buttonclass">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
