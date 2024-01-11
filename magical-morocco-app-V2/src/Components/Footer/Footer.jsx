import React, { useEffect } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={v2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
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
            <div data-aos="fade-up" className="footerParagraph">
              Explore the beauty of Morocco with Magical Morocco App. Immerse
              yourself in the rich culture, vibrant markets, and breathtaking
              landscapes. Plan your dream journey and make lasting memories in
              this enchanting destination.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagramSquare className="icon" />
              <FaFacebookSquare className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-oas-duration="4000"
              className="linkGroup"
            >
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
            <div
              data-aos="fade-up"
              data-oas-duration="5000"
              className="linkGroup"
            >
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
            <div
              data-aos="fade-up"
              data-oas-duration="6000"
              className="linkGroup"
            >
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
