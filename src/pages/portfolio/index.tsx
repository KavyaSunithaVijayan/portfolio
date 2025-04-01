import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import "react-vertical-timeline-component/style.min.css";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import Animation from "../../components/content/animationObserver";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Portfolio() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides:{
        perView:3
      }

    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div>
      <div className="max-w-screen-xl mx-auto bg-white grid grid-cols-2 gap-5 items-center py-16">
        <div>
          <h4 className="text-violet-950 poppins-bold text-6xl pb-10 ">
            I'm Kavya Vijayan
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            feugiat a urna consequat fringilla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div className="py-15">
            <button className="bg-gray-200 hover:bg-amber-300 p-3 rounded-full animate-bounce">
              Download CV
            </button>
          </div>
        </div>
        <Animation animationType={"animate__slideInRight "}>
          <img src="/image/working_girl.jpg" alt="working_girl" />
        </Animation>
      </div>

      <div className="py-10 max-w-screen-xl mx-auto " id="about">
        <div className="flex gap-10 items-center justify-center">
          <img
            src="./image/girl-01.jpg"
            alt="girl-working-02"
            className="w-55"
          />
          <div className="text-center relative ">
            <span className="text-9xl font-bold text-gray-900 opacity-10">
              ABOUT ME
            </span>
            <p className="absolute inset-0 flex flex-col items-center justify-center text-3xl">
              <p className="w-fit mt-3">
                Know Me More
                <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
              </p>
            </p>
          </div>
        </div>

        <div className="py-15 grid grid-cols-3 gap-26 items-center">
          <div className="col-span-2">
            <p className="text-3xl poppins-semibold tracking-wide">
              I'm <span className="text-violet-900 ">Kavya Vijayan,</span>a Web
              Developer
            </p>
            <p className="text-justify pt-5 poppins-regular tracking-wider leading-7">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              <br />
              <br />
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>

          <div className="col-span-1 ">
            <ul>
              <li className="tracking-wide">
                <span className="poppins-semibold text-[#4C4D6A]">
                  {" "}
                  Name :{" "}
                </span>
                <span className="text-black poppins-regular">
                  Kavya Vijayan
                </span>
              </li>
              <li>
                <span className="poppins-semibold text-[#4C4D6A]">
                  Email :{" "}
                </span>{" "}
                kavyavijayan6713@gmail.com
              </li>
              <li>
                <span className="poppins-semibold text-[#4C4D6A]">Age : </span>
                24
              </li>
              <li>
                <span className="poppins-semibold text-[#4C4D6A]">From : </span>
                Ernakulam, Kerala
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 max-w-screen-xl mx-auto " id="what I Do">
        <div className="text-center relative ">
          <span className="text-9xl font-bold text-gray-900 opacity-10">
            TECHNOLOGY
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-3xl">
            <p className="w-fit mt-3">
              What I Do
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>
        <div className="py-15 grid grid-cols-2 gap-15">
          <p className="text-justify poppins-regular tracking-wider leading-7">
            I am a proficient web developer with experience in front-end
            development, performance optimization, and designing and integrating
            admin panels. I specialize in integrating APIs into user-friendly
            interfaces, ensuring seamless and efficient performance. My focus is
            on building fast, responsive web applications that meet both
            business and user needs, while delivering clean, maintainable code
            and optimized solutions.
          </p>
          <div className="grid grid-cols-4 gap-5">
            <img
              src="/image/html.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-30 hover:opacity-100 cursor-pointer"
              alt="html"
            />
            <img
              src="/image/css.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="css"
            />
            <img
              src="/image/javascript.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="javascript"
            />
            <img
              src="/image/bootstrap.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="bootstrap"
            />
            <img
              src="/image/next.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="next"
            />
            <img
              src="/image/react.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="react"
            />
            <img
              src="/image/tailwind.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="tailwind"
            />
            <img
              src="/image/vite.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="vite"
            />
          </div>
        </div>
      </div>
      <div className="py-10 max-w-screen-xl mx-auto " id="what I Do">
        <div className="text-center relative ">
          <span className="text-9xl font-bold text-gray-900 opacity-10">
            EXPERIENCE
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-3xl">
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
      <div className="py-10 max-w-screen-xl mx-auto" id="what I Do">
        <div className="text-center relative ">
          <span className="text-9xl font-bold text-gray-900 opacity-10">
            EDUCATION
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-3xl">
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
      <div className="py-10 max-w-screen-xl mx-auto" id="what I Do">
        <div className="text-center relative ">
          <span className="text-9xl font-bold text-gray-900 opacity-10">
            MY WORKS
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-3xl">
            <p className="w-fit mt-3">
              Work
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 py-15 animate__animated animate__slideInUp">
          <div className="relative group w-full overflow-hidden ">
            <a
              href="#"
              className="block max-w-sm  border border-gray-200 shadow-sm"
            >
              <img
                src="./image/ecommerce.jpg"
                alt="ecommerce"
                className="w-96 h-64 object-contain"
              />
            </a>

            {/* <!-- Hover Overlay --> */}
            <div className="p-7 absolute inset-0 bg-orange-200 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
              <h2 className=" poppins-semibold  font-semibold ">
                ECOMMERCE WEBSITE
              </h2>
              <p className="text-justify leading-5 poppins-light break-all py-4">
                An online platform that allows businesses and individuals to buy
                and sell products or services over the internet. It provides a
                seamless shopping experience with features like product
                listings, secure payment gateways, user accounts, and order
                tracking.
              </p>
              <button className="hover-underline poppins-light">
                {" "}
                See Website
              </button>
            </div>
          </div>
          <div className="relative group w-full overflow-hidden ">
            <a href="#" className="block max-w-sm">
              <img
                src="./image/yts.jpg"
                alt="yts.jpg"
                className="w-96 h-64 object-contain"
              />
            </a>

            {/* <!-- Hover Overlay --> */}
            <div className="p-7 absolute inset-0 bg-orange-200 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
              <h2 className=" poppins-semibold  font-semibold ">YTS CLONE</h2>
              <p className="text-justify leading-5 poppins-light break-all py-4">
                A digital platform that allows users to stream, rent, or
                purchase movies and TV shows from various genres. These websites
                provide a vast collection of content, including the latest
                releases, classic films, and exclusive originals.
              </p>
              <button className="hover-underline poppins-light">
                {" "}
                See Website
              </button>
            </div>
          </div>
          <div className="relative group w-full overflow-hidden ">
            <a href="#" className="block max-w-sm">
              <img
                src="./image/eccomerce-02.jpg"
                alt="eccomerce-02.jpg"
                className="w-96 h-64 object-contain"
              />
            </a>

            {/* <!-- Hover Overlay --> */}
            <div className="p-7 absolute inset-0 bg-orange-200 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
              <h2 className="poppins-semibold  font-semibold ">DEMO</h2>
              <p className="text-justify leading-5 poppins-light break-all py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="hover-underline poppins-light">
                {" "}
                See Website
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 max-w-screen-xl mx-auto" id="what I Do">
        <div className="text-center relative ">
          <span className="text-9xl font-bold text-gray-900 opacity-10">
            MY SKILLS
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-3xl">
            <p className="w-fit mt-3">
              SKILLS
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>

        {/* <Animation animationType={"animate__zoomIn "}>
          <div>
            <div className="w-full max-w-sm border border-gray-300 rounded-xl mx-auto my-15">
              <img
                className="p-8 rounded-t-lg "
                src="./image/skils.jpg"
                alt="product image"
              />

              <ul className="list-disc px-10">
                <li className="text-lg  tracking-tight text-gray-900 popins-regular">
                  FRONT END
                </li>
                <p className="text-gray-500 popins-light py-4">
                  HTML, JavaScript, React, Next.js, Vite
                </p>
                <li className="text-lg  tracking-tight text-gray-900 popins-regular">
                  STYLE SHEET
                </li>
                <p className="text-gray-500 popins-light py-4">
                  CSS, TailWind, Boostrap
                </p>
              </ul>
            </div>
          </div>
        </Animation> */}

        <div ref={sliderRef} className="keen-slider py-15">
          <div className="keen-slider__slide number-slide1 bg-[#B5BDE1] text-center">
            <img
              src="./image/code.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">FrontEnd</h2>
            <p>HTML, JavaScript, React, Next.js, Vite</p>
          </div>
          <div className="keen-slider__slide number-slide1 bg-[#E5DDF4] text-center">
            <img
              src="./image/css.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">StyleSheet</h2>
            <p>CSS, TailWind, Bootstrap</p>
          </div>
          <div className="keen-slider__slide number-slide1 bg-[#add8e5] text-center">
            <img
              src="./image/css.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">Tools & Platforms</h2>
            <p>Git, Netlify</p>
          </div>
          <div className="keen-slider__slide number-slide1 bg-[#E5DDF4] text-center">
            <img
              src="./image/css.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">Others </h2>
            <p>REST APIs</p>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
