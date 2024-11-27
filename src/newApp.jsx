import React from "react";
import logo from "./assets/logodark.svg";
import homeIcon from "./assets/homeIcon.svg";
import handsIcon from "./assets/handsIcon.svg";
import keyss from "./assets/keys.svg";
import sun from "./assets/sun.svg";
import virtualTour from "./assets/virtualtour.svg";
import bus from "./assets/bus.svg";
import bgOne from "./assets/bg1.svg";
import bgTwo from "./assets/bg2.svg";
import propertyCard from "./assets/Property-Card.svg";
import sideMenu from "./assets/sidemenu.svg";
import playTube from "./assets/playtube.svg";

function NewApp() {
  return (
    <div className="absolute flex flex-col  h-fit md:h-[750px] justify-start inset-0 bg-[#F3FFFD] p-0 ">
      <nav className=" top-0 inset-x-0 bg-white mt-0 ml-0">
        <img src={logo} alt="OikusDat Logo" className="ml-3  md:w-48" />
      </nav>
      <div className=" flex flex-col md:flex-row-reverse items-center md:items-start justify-center">
        <div className="md:m-[50px] md:p-10 ml-3 ">
          <div className=" p-[10px] mt-[29.5px] ">
            <h1 className="  text-[48px] md:text-[70px] w-[386px] md:w-[551px] font-bold h-[116px] md:h-[168px] leading-[57.6px] md:leading-[84px] ">
              Search Less, Find More...
            </h1>
            <p className=" font-normal text-[#303030] font-[Lato] text-[14px] md:text-[18px] md:w-[585px] w-[393px] h-[84px] mt-[12px]  mb-0 md:mb-[16px] leading-[21.28px] md:leading-[27.3px] ">
              Discover Your Dream Home with OikusDat: Connecting House Hunters,
              Landlords, and Agents in Lagos through Verified, Hassle-Free
              Experiences. <br /> Click below to proceed:
            </p>
          </div>
          <div className=" flex md:mt-[30px] justify-around items-center">
            <div className=" flex flex-col items-center ">
              <div className=" bg-white w-[99px] h-[99px] transition-transform duration-300 cursor-pointer hover:scale-110 md:hover:scale-110 hover:ease-in-out md:size-[130px] rounded-full flex items-center justify-center shadow-fade">
                <img src={homeIcon} alt="" srcset="" />
              </div>
              <p className=" font-[Lato] md:text-[18px] text-[15px] text-[#303030] w-[31px] h-[18px] mt-[18px] ">
                Rent
              </p>
            </div>
            <p className=" text-[#B3B3B3] md:text-[20px]"> Or</p>
            <div className=" flex flex-col items-center">
              <div className=" bg-white w-[99px] h-[99px] transition-transform duration-300 cursor-pointer hover:scale-110 md:hover:scale-110 hover:ease-in-out md:size-[130px] rounded-full flex items-center justify-center shadow-fade">
                <img src={handsIcon} alt="" srcset="" />
              </div>
              <p className=" font-[Lato] md:text-[18px] text-[15px] text-[#303030] w-[31px] h-[18px] mt-[18px] ">
                Own
              </p>
            </div>
          </div>
        </div>
        <div className=" md:ml-[50px]   relative flex flex-col w-screen  md:w-[1200px]  md:h-[700px] h-[600px] pt-[50px] px-[100px]  pb-[30px] items-center justify-center md:items-start md:justify-start mt-[42.5px] md:mt-0 ">
          <img
            src={keyss}
            alt=""
            className=" absolute md:w-[70px] md:h-[60px] top-[110px] md:top-[300px] left-0 md:left-[0px]"
          />
          <img
            src={sun}
            alt=""
            className=" absolute md:w-[70px] md:h-[60px] top-[30px] md:top-[120px] left-[90px] md:left-[40px] "
          />
          <img
            src={virtualTour}
            alt=""
            className=" absolute md:w-[80px] md:h-[80px] -top-[0px] md:top-[4px] left-[210px] md:left-[220px] "
          />
          <img
            src={bus}
            alt=""
            className=" absolute md:w-[80px] md:h-[80px] top-[37px] md:top-[37px] left-[330px] md:left-[430px] "
          />
          <div className="  w-[400px] h-[530px]  md:h-[800px] relative flex items-center justify-start p-0 ml-12">
            <div className=" relative w-[300px] md:w-[1000px] h-[460px] md:h-[700px] object-cover ml-3 ">
              <img
                src={bgTwo}
                alt=""
                className=" rotate-0 md:rotate-6  absolute  md:w-[700px] md:h-[700px] w-[400px] h-[400px] top-0 left-4 md:left-6 z-0 rounded-2xl "
              />
              <img
                src={bgOne}
                alt=""
                className="  absolute md:w-[700px] md:h-[700px] w-[380px] h-[380px] top-3 md:top-5 left-0 z-10 rounded-2xl "
              />
            </div>
            <img
              src={propertyCard}
              alt=""
              className="  absolute bottom-[45px] md:-bottom-[40px] right-1 md:right-[-140px] md:size-80 object-contain z-10 p-0  "
            />
            <img
              src={sideMenu}
              alt=""
              className=" absolute md:-left-[150px] -left-4 md:bottom-[23%] object-contain z-10 md:size-[300px] "
            />
            <img
              src={playTube}
              alt=""
              className=" md:rotate-2 absolute md:size-36 top-10 md:top-[80px] right-12 md:right-[-90px] object-contain z-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewApp;
