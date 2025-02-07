import React from "react";

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-message">
          We appreciate your feedback. Your response has been recorded
          successfully.
        </p>
        <button
          className="return-button"
          onClick={() => (window.location.href = "/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
