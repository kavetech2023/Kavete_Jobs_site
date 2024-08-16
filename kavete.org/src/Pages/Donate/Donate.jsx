import React from "react";

const Donate = () => {
  return (
    <div className="fadein">
      <div className="hero">
        <h1>Donate</h1>
        <p>Please let us keep this project up.</p>
      </div>

      <div className="app-box">
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="hosted_button_id" value="GNVJAJ95JVHLW" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_KE/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
  );
};

export default Donate;
