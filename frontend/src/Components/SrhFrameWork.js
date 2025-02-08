import { useState } from "react";
import Form from "./Form";

export default function Srhframework() {
  const [togglefile, settogglefile] = useState(false);

  return (
    <>
      <div>
        <div>
          {/* <div className="frameworkBackground"> */}
          {/* <div className="frameworkHeading">
              Basic Framework for becoming customer focus :
            </div> */}

          <div>
            {/* <div>
                <img src="./images/srhframeworkbannerimage.jpeg" />
              </div> */}
            <div className="container-frameworkcode">
              <div className="sub-div-frameworkcode">
                <div className="header-frameworkcode">
                  <h1>SRH Framework</h1>
                </div>

                {/* <div className="language-toggle-frameworkcode">
                  <button
                    className="toggle-btn-frameworkcode"
                    onclick="toggleLanguage()"
                  >
                    Switch Language
                  </button>
                </div> */}
              </div>

              <div className="description-frameworkcode">
                <p>
                  Being customer-focus requires knowing the customers through
                  surveys and conversations, grouping them according to age or
                  interest, and making detailed profiles with empathy in
                  identifying their needs. Personalized experiences come with
                  tailored offers and dynamic content based on customer data.
                  Map the customer journey to spot obstacles and engage with
                  customers across multiple channels, including WhatsApp for
                  support. Collect feedback regularly to improve, train, and
                  empower staff for the decision-making, and make use of CRM
                  tools for analyzing customer behaviour. Last but not the
                  least, have a loyalty program that encourages frequent
                  customers with the same shopping experience across all sites.
                </p>
              </div>
            </div>
            <div>
              <div className="description-frameworkcode">
                <h2>Access the SRH Framework for Smarter Solutions</h2>
              </div>
              {/* <!-- Toggle Button --> */}
              <div className="toggle-button">
                <input
                  type="checkbox"
                  id="toggle"
                  class="toggleCheckbox"
                  onClick={() => {
                    settogglefile(!togglefile);
                  }}
                />
                <label for="toggle" class="toggleContainer">
                  <div className="eng-pdf">English</div>
                  <div className="tam-pdf">தமிழ்</div>
                </label>
              </div>
              <div>
                <Form
                  toolName={
                    togglefile ? "SRHFrameworkTamil" : "SRHFrameworkEnglish"
                  }
                  actionType="DirectDownload1"
                />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
