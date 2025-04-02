import React from "react";
import { FaComputer, FaUserGraduate } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

function Education() {
  return (
    <div>
      <div className="py-6 max-w-screen-xl mx-auto" id="what I Do">
        <div className="text-center relative ">
          <span className="text-7xl lg:text-9xl font-bold text-gray-900 opacity-10">
            EDUCATION
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-2xl lg:text-3xl">
            <p className="w-fit mt-3">
              Education
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>

        <div className="py-15 relative">
          <img
            src="/image/bg-img-02.png"
            alt="bg-image-02"
            className="object-contain object-center w-[900px] mx-auto"
          />
          <div className="absolute inset-0 flex items-center ">
            <VerticalTimeline lineColor={"black"}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(192 129 160)",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(192 129 160)",
                }}
                date="June 2019 - December 2022"
                iconStyle={{ background: "rgb(229, 221, 244)", color: "#000" }}
                icon={<FaComputer />}
              >
                <h3 className="vertical-timeline-element-title font-semibold poppins-regular">
                  INTERNSHIP
                </h3>
                <h4 className="vertical-timeline-element-subtitle poppins-regular">
                  Soften Technologies, Ernakulam, Kerala
                </h4>
                <span className="poppins-light">
                  Internship in Java Full Stack Development
                </span>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(192 129 160)",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(192 129 160)",
                }}
                date="June 2019-2022"
                iconStyle={{ background: "rgb(229, 221, 244)", color: "#000" }}
                icon={<FaUserGraduate />}
              >
                <h3 className="vertical-timeline-element-title font-semibold poppins-regular">
                  BACHELOR IN COMPUTER APPLICATION
                </h3>
                <h4 className="vertical-timeline-element-subtitle poppins-regular">
                  Jai Bharth Arts and Science College, Ernakulam, Kerala
                </h4>
                <span className=" poppins-light">CGPA- 6.7</span>
              </VerticalTimelineElement>
            </VerticalTimeline>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
