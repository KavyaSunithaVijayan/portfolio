// import { FaHeadphonesSimple } from "react-icons/fa6";
// import { HiOutlineComputerDesktop } from "react-icons/hi2";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import PixelTransition from "../../../components/content/ExperianceCard/PixelTransition";

function Experience() {
  return (
    <div>
      <div className="pt-8 max-w-screen-xl mx-auto px-3" id="what I Do">
        <div className="text-center relative ">
          <span className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white opacity-20">
            EXPERIENCE
          </span>
          <p className="dancing-script-medium tracking-widest absolute inset-0 flex flex-col items-center justify-center text-xl sm:text-2xl lg:text-3xl text-green-500">
            <p className="w-fit mt-3">
              Experience
              <hr className="w-16 mt-3 mx-auto text-white border-[1px]" />
            </p>
          </p>
        </div>
        <div className="max-w-xl mx-auto grid grid-cols-2 items-center justify-center gap-15 py-8 cursor-pointer">
          <PixelTransition
            firstContent={
              <>
                <img
                  src="/image/experiance/SpiderLogo.png"
                  alt="SpiderLogo.png"
                  style={{
                    width: "50%",
                    height: "50%",
                    objectFit: "contain",
                  }}
                  className="mx-auto"
                />
                <h3 className="text-white text-md sm:text-xl font-bold text-center tracking-wide">
                  TECHNICAL SUPPORTER
                </h3>
                <img
                  src="/image/experiance/01.png"
                  className="hidden sm:block w-26 m-auto cursor-pointer"
                  alt="react"
                />
              </>
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <p className="text-justify text-xs sm:text-md text-white px-3">
                  Worked as a{" "}
                  <b className="text-green-500">Technical Support Engineer</b>{" "}
                  at
                  <b className="text-green-500"> Spider Technosoft</b> from
                  March 8, 2023 to October 12, 2024, providing technical
                  assistance, troubleshooting software and hardware issues,{" "}
                  <span className="hidden sm:block">
                    and ensuring timely resolution of client concerns to
                    maintain high service quality.
                  </span>
                </p>
              </div>
            }
            gridSize={2}
            pixelColor="#ffffff"
            animationStepDuration={1}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <>
                <img
                  src="/image/experiance/SpiderLogo.png"
                  alt="SpiderLogo.png"
                  style={{
                    width: "50%",
                    height: "50%",
                    objectFit: "contain",
                  }}
                  className="mx-auto"
                />
                <h3 className="text-white text-md sm:text-xl font-bold text-center tracking-wide">
                  REACT DEVELOPER
                </h3>
                <img
                  src="/image/technologies/react.png"
                  className="hidden sm:block w-18 m-auto cursor-pointer pt-1 sm:pt-3"
                  alt="react"
                />
              </>
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <p className="text-justify text-xs sm:text-md text-white px-3">
                  Currently working as a{" "}
                  <b className="text-green-500">React Developer</b> at{" "}
                  <b className="text-green-500">Spider Technosoft</b> since
                  February 28, 2025, where I focus on developing responsive and
                  web applications using React, JavaScript, TypeScript and
                  related frontend technologies.
                </p>
              </div>
            }
            gridSize={2}
            pixelColor="#ffffff"
            animationStepDuration={1}
            className="custom-pixel-card"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
