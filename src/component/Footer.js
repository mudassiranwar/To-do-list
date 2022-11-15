import React from "react";

import { GrInstagram } from "react-icons/gr";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white mt-auto bg-secondary">
      <footer className="container pt-3 d-flex justify-content-between">
        <p>&copy; 2022 Copyright:mudassir Pvt. Ltd</p>
        <span>
          <a className={`text-white fs-5 p-0 mx-1`} href="https://www.instagram.com/mudassir_mh41/" target="_blank">
            <GrInstagram />
          </a>
          <a className={`text-white fs-5 p-0 mx-1`} href="https://www.facebook.com/" target="_blank">
            <AiFillFacebook />
          </a>
          <a className={`text-white fs-5 p-0 mx-1`} href="https://www.linkedin.com/login" target="_blank">
            <AiFillLinkedin />
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
