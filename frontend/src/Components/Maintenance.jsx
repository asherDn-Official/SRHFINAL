import "../styles/Maintenance.css";
import { useEffect } from "react";

export default function Maintenance() {
    useEffect(() => {
  const glow = document.querySelector(".cursor-glow");

  const moveCursor = (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  };

  window.addEventListener("mousemove", moveCursor);
  return () => window.removeEventListener("mousemove", moveCursor);
}, []);
  return (
    <div className="maintenance-container">
      <div className="cursor-glow"></div>

      <div className="maintenance-card">
        <h1>🚧 We’ll Be Back Soon</h1>
        <p>
          Our website is currently undergoing scheduled maintenance.
          <br />
          We’re working hard to improve your experience.
        </p>

        <div className="contact-box">
          <h3>Contact Us</h3>
          <p>📧 growthranjith@gmail.com</p>
          <p>📞 +91 97155 93777</p>
        </div>
      </div>
    </div>
  );
}
