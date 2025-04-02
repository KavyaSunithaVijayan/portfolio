import { FaHeadphonesSimple } from 'react-icons/fa6'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

function Experience() {
  return (
    <div>
<div className="py-6 max-w-screen-xl mx-auto " id="what I Do">
        <div className="text-center relative ">
          <span className="text-7xl lg:text-9xl font-bold text-gray-900 opacity-10">
            EXPERIENCE
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-2xl lg:text-3xl">
            <p className="w-fit mt-3">
              Experience
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>
        <div className="py-15 relative">
          <img
            src="/image/bg-img-02.png"
            alt="bg-image"
            className="object-contain object-center w-[900px] mx-auto"
          />
          <div className="absolute inset-0 flex items-center ">
            <VerticalTimeline lineColor={"black"}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(181, 189, 225)",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(181, 189, 225)",
                }}
                date="February 2025 - present"
                iconStyle={{ background: "rgb(229, 221, 244)", color: "#000" }}
                icon={<HiOutlineComputerDesktop />}
              >
                <h3 className="vertical-timeline-element-title font-semibold poppins-regular">
                  SOFTWARE DEVELOPER
                </h3>
                <h4 className="vertical-timeline-element-subtitle poppins-regular">
                  Ernakulam, Kerala
                </h4>
                <p className=" poppins-regular">!</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(181, 189, 225)",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(181, 189, 225)",
                }}
                date="March 2023 - October 2024"
                iconStyle={{ background: "rgb(229, 221, 244)", color: "#000" }}
                icon={<FaHeadphonesSimple />}
              >
                <h3 className="vertical-timeline-element-title poppins-regular">
                  TECHNICAL SUPPORT
                </h3>
                <h4 className="vertical-timeline-element-subtitle poppins-regular">
                  Ernakulam, Kerala
                </h4>
                <span className="poppins-extralight">
                  Technical support, Client interaction
                </span>
              </VerticalTimelineElement>
            </VerticalTimeline>{" "}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience