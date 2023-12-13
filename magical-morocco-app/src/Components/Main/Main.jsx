import React, { useEffect } from "react";
import "./main.css";
import { GrLocation } from "react-icons/gr";
import { TbClipboardCheck } from "react-icons/tb";
import marrakech from "../../assets/marrakech.jpg";
import chefchaouen from "../../assets/chefchaouen.jpg";
import fes from "../../assets/fes.jpg";
import essaouira from "../../assets/essaouira.jpg";
import casablanca from "../../assets/casablanca.jpg";
import merzouga from "../../assets/merzouga.jpg";
import tangier from "../../assets/tangier.jpg";
import agadir from "../../assets/agadir.jpg";
import ouarzazate from "../../assets/ouarzazate.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: marrakech,
    destTitle: "Marrakech",
    location: "Marrakech, Morocco",
    grade: "5 stars",
    fees: "MAD 150",
    description:
      "Marrakech is known for its vibrant markets, stunning palaces, and beautiful gardens. Immerse yourself in the rich culture and history of this enchanting city.",
  },
  {
    id: 2,
    imgSrc: chefchaouen,
    destTitle: "Chefchaouen",
    location: "Chefchaouen, Morocco",
    grade: "4 stars",
    fees: "MAD 100",
    description:
      "Chefchaouen, the blue city, is famous for its distinctive blue-washed buildings. Explore the narrow streets, visit local markets, and enjoy the breathtaking mountain views.",
  },
  {
    id: 3,
    imgSrc: fes,
    destTitle: "Fes",
    location: "Fes, Morocco",
    grade: "4.5 stars",
    fees: "MAD 120",
    description:
      "Fes is a city with a rich history and a UNESCO World Heritage site. Discover the medieval architecture, visit the old Medina, and experience the traditional Moroccan way of life.",
  },
  {
    id: 4,
    imgSrc: essaouira,
    destTitle: "Essaouira",
    location: "Essaouira, Morocco",
    grade: "4 stars",
    fees: "MAD 110",
    description:
      "Essaouira is a coastal town known for its blue and white medina, sandy beaches, and fresh seafood. Enjoy the laid-back atmosphere and artistic vibes of this charming town.",
  },
  {
    id: 5,
    imgSrc: casablanca,
    destTitle: "Casablanca",
    location: "Casablanca, Morocco",
    grade: "4 stars",
    fees: "MAD 130",
    description:
      "Casablanca is Morocco’s largest city and a bustling metropolis with a mix of modern and historic landmarks. Explore the Hassan II Mosque, Corniche, and vibrant neighborhoods.",
  },
  {
    id: 6,
    imgSrc: merzouga,
    destTitle: "Merzouga",
    location: "Merzouga, Morocco",
    grade: "4.5 stars",
    fees: "MAD 160",
    description:
      "Merzouga is famous for its stunning Sahara Desert landscapes. Take a camel trek, enjoy a desert camp experience, and witness breathtaking sunsets over the dunes.",
  },
  {
    id: 7,
    imgSrc: tangier,
    destTitle: "Tangier",
    location: "Tangier, Morocco",
    grade: "3.5 stars",
    fees: "MAD 90",
    description:
      "Tangier is a port city with a unique blend of African, European, and Middle Eastern influences. Explore the Kasbah, visit museums, and enjoy panoramic views of the Strait of Gibraltar.",
  },
  {
    id: 8,
    imgSrc: agadir,
    destTitle: "Agadir",
    location: "Agadir, Morocco",
    grade: "4 stars",
    fees: "MAD 140",
    description:
      "Agadir is a modern beach resort with a long stretch of sandy coastline. Relax on the beach, try water sports, and explore the nearby Souss-Massa National Park.",
  },
  {
    id: 9,
    imgSrc: ouarzazate,
    destTitle: "Ouarzazate",
    location: "Ouarzazate, Morocco",
    grade: "4 stars",
    fees: "MAD 120",
    description:
      "Ouarzazate is known as the gateway to the Sahara and is a hub for the film industry. Visit the Atlas Film Studios, explore ancient kasbahs, and enjoy the desert landscapes.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-oas="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <GrLocation className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <TbClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
