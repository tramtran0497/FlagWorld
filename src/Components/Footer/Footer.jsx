import React, { useState, useRef, useEffect } from "react";
import "./footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessIcon from "@mui/icons-material/Business";
import emailjs from "@emailjs/browser";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import variables from "../../SCSS/variables.module.scss";

function Footer() {
  const [successSending, setSuccessSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xdsbsro",
        "template_oqyz4si",
        form.current,
        "user_9DXr4NeVxeiIQD38SK340"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessSending(true);
        },
        (error) => {
          console.log(error.text);
          setSuccessSending(false);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    const hideMessage = setTimeout(() => {
      setSuccessSending(false);
    }, 3000);
    return () => {
      clearTimeout(hideMessage);
    };
  }, [successSending]);

  return (
    <div className="footer">
      <div className="footer__info">
        <h3>How many % you know about the World?</h3>
        <ul>
          <li><a href="https://geology.com/world/world-map.shtml">View the world</a></li>
          <li><a href="https://ourworldindata.org/world-region-map-definitions">Regions</a></li>
          <li><a href="https://www.worldometers.info/geography/7-continents/">Continents</a></li>
          <li><a href="https://www.marinebio.org/oceans/geography/">Oceans</a></li>
        </ul>
        <p className="footer__info__copyRight">Copyright © 2022 TramTran</p>
      </div>

      <div className="footer__contact" id="contact">
        {successSending ? (
          <p>
            <CheckCircleIcon
              style={{ color: variables.primaryColor, marginRight: "10px" }}
            />{" "}
            You sent your feeedback successfully, Thank you!
          </p>
        ) : (
          <p style={{ color: variables.primaryLight }}>
            Sending us your feedback, it helps us serve you better!
          </p>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="footer__contact__sendEmail"
        >
          <div className="footer__contact__sendEmail__feedBack">
            <input
              type="text"
              name="message"
              placeholder="Leave your words here..."
            />
          </div>
          <div className="footer__contact__sendEmail__email">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email..."
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="footer__contact__sendEmail__btn"
          />
        </form>
      </div>

      <div className="footer__socialIcons">
        <a href="https://github.com/tramtran0497">
          <GitHubIcon className="footer__socialIcons__icon" />
        </a>
        <a href="https://www.linkedin.com/in/tram-tran-924301207/">
          <LinkedInIcon className="footer__socialIcons__icon" />
        </a>
        <a href="https://www.integrify.io/">
          <BusinessIcon className="footer__socialIcons__icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
