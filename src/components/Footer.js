import React from "react";
import { GitHub, Linkedin } from "react-feather";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made by Son Mogendorff<br></br>
        <a
          href="https://github.com/sasasiassa"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/son-mogendorff-303856158/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin />
        </a>
      </p>
    </div>
  );
};

export default Footer;
