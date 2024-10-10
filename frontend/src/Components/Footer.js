export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-contact-info">
          <div class="footer-contact-item footer-contact-call">
            <img
              src="./images/phone-icon.png"
              alt="Call Us"
              class="footer-contact-icon footer-icon-call"
            />
            <h3 class="footer-contact-title footer-title-call">Call Us</h3>
            <p class="footer-contact-details footer-details-call">
              +91 9988884541
            </p>
            <p class="footer-contact-details1 footer-details-call">
              +91 9558282255
            </p>
          </div>
          <div class="footer-contact-item footer-contact-write">
            <img
              src="./images/mail-icon.png"
              alt="Write Us"
              class="footer-contact-icon footer-icon-write"
            />
            <h3 class="footer-contact-title footer-title-write">Write Us</h3>
            <p class="footer-contact-details footer-details-write">
              growthranjith121@gmail.com
            </p>
          </div>
          <div class="footer-contact-item footer-contact-visit">
            <img
              src="./images/location-icon.png"
              alt="Visit Us"
              class="footer-contact-icon footer-icon-visit"
            />
            <h3 class="footer-contact-title footer-title-visit">Visit Us</h3>
            <p class="footer-contact-details footer-details-visit">
              122, Kamarajar street,
              <br />
              Raja Annamalalpuram,
              <br />
              Dhindukkal-645055
            </p>
          </div>
        </div>
        <div class="footer-social-icons">
          <a class="social-liknosnf" href="#">
            <img
              src="./images/insta.png"
              alt="Instagram"
              class="footer-social-icon footer-icon-instagram"
            />
          </a>
          <a class="social-liknosnf" href="#">
            <img
              src="./images/face.png"
              alt="Facebook"
              class="footer-social-icon footer-icon-facebook"
            />
          </a>
          <a class="social-liknosnf" href="#">
            <img
              src="./images/you.png"
              alt="YouTube"
              class="footer-social-icon footer-icon-youtube"
            />
          </a>
          <a class="social-liknosnf" href="#">
            {" "}
            <img
              src="./images/linkldin.png"
              alt="LinkedIn"
              class="footer-social-icon footer-icon-linkedin"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
