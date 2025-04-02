import React from "react";

function About() {
  return (
    <div>
      <div className="py-6 max-w-screen-xl mx-auto ">
        <div className="flex gap-5 lg:gap-10 items-center justify-center">
          <img
            src="./image/girl-01.jpg"
            alt="girl-working-02"
            className="w-40 lg:w-55"
          />
          <div id="about" className="text-center relative ">
            <span className="text-7xl lg:text-9xl font-bold text-gray-900 opacity-10">
              ABOUT ME
            </span>
            <p className="absolute inset-0 flex flex-col items-center justify-center text-2xl lg:text-3xl">
              <p className="w-fit mt-3">
                Know Me More
                <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
              </p>
            </p>
          </div>
        </div>

        <div className="py-15 grid grid-cols-2 lg:grid-cols-3 gap-15 lg:gap-20 items-center">
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
    </div>
  );
}

export default About;
