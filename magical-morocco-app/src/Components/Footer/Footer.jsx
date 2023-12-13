import React from "react";
import "./footer.css";
import v2 from "../../assets/v2.mp4";
import { TbSend } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
import {
  FaChevronRight,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={v2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <TbSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv className="icon" />
                Magical Morocco App.
              </a>
            </div>
            <div className="footerParagraph">
              Explore the beauty of Morocco with Magical Morocco App. Immerse
              yourself in the rich culture, vibrant markets, and breathtaking
              landscapes. Plan your dream journey and make lasting memories in
              this enchanting destination.
            </div>
            <div className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagramSquare className="icon" />
              <FaFacebookSquare className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Payment
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Rentacars
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>KTAKI &copy;2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
