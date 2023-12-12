import React from 'react'
import './home.css'
import video from '../../assets/v2.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { TbBrandBooking } from "react-icons/tb";
import { TbList } from "react-icons/tb";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay type="video/mp4" loop></video>
        <div className="homeContent container">
            <div className="textDiv">
                <span className="smallText">
                    Our Packages
                </span>
                <h1 className="homeTitle">
                    Search your Holiday
                </h1>
            </div>
            <div className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search your Destination:</label>
                    <div className="input flex">
                        <input type="text" name="" id="" placeholder='Enter name here ...'/>
                        <GrLocation className='icon' />
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date">Select your date:</label>
                    <div className="input flex">
                        <input type="date" name="" id=""/>
                    </div>
                </div>
                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price">Max price:</label>
                        <h3 className="total">
                            MAD 5000
                        </h3>
                    </div>
                    <div className="input flex">
                        <input type="range" name="" id=""  max='5000' min='1000'/>
                    </div>
                </div>
                <div className="searchOptions flex">
                    <HiFilter className='icon'/>
                    <span>MORE FILTERS</span>
                </div>
            </div>
            <div className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FiFacebook className="icon"/>
                    <FiInstagram className="icon"/>
                    <TbBrandBooking className="icon"/>
                </div>
                <div className="leftIcons">
                    <TbList className="icon"/>
                    <TbApps className='icon'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home