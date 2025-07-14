import Animation from "../../../components/content/animationObserver";
import "../../../App.css";
import { useState } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden relative">
        <img
          src="/image/profile/profile.jpeg"
          alt="profile"
          className="w-full object-contain "
        />
        <div className="absolute inset-0 bg-black opacity-60 w-full" />
        <header className="absolute top-0 w-full">
          <div className="p-5 flex items-center justify-between ">
            <div className="flex gap-25">
              {/* <h4 className="text-2xl poppins-semibold text-white">
                  Kavya Vijayan
                </h4> */}
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-white text-2xl">
                <a href="https://www.linkedin.com/in/kavya-vijayan-a89b3525b/">
                  <TiSocialLinkedin />
                </a>
              </h1>
              <h1 className="text-white  hover:text-green-500 text-2xl">
                <a href="https://github.com/KavyaSunithaVijayan">
                  <FaGithub />
                </a>
              </h1>
              {/* <div className="text-white ">
                <RxHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
              </div> */}
            </div>
          </div>
          {/* <div
            className={`fixed top-0 z-50 bottom-0 w-[50%] h-screen bg-[#E5DDF4] transition-transform duration-300 ease-linear  ${
              showMenu
                ? "translate-x-0 right-0"
                : "translate-x-[100%] -right-[160px]"
            }`}
          >
            <button onClick={() => setShowMenu(!showMenu)} className="p-0 ">
              <IoIosClose size="30px" />
            </button>
            <img
              src="/image/girl-02.png"
              alt="girl working"
              className="w-96 mx-auto"
            />
            <ul className="text-center py-5">
              <li className="text-black  hover:text-violet-900 poppins-semibold pb-3">
                <a href="#home">HOME</a>
              </li>
              <li className="text-black hover:text-violet-900 poppins-light poppins-semibold pb-3">
                <a href="#about"> ABOUT</a>
              </li>
              <li className="text-black hover:text-violet-900 poppins-light poppins-semibold pb-3">
                <a href="#whatIDo">WHAT I DO</a>
              </li>
              <li className="text-black hover:text-violet-900 poppins-light poppins-semibold pb-3">
                <a href="#work">WORK</a>
              </li>

              <li className="text-black hover:text-violet-900 poppins-light poppins-semibold pb-3">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div> */}
        </header>
        <div className="absolute left-10 min-[350px]:left-20 top-20 sm:inset-0  flex flex-col justify-center text-center pt-0 sm:pt-15 lg:pt-40 ">
          <h3 className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold tracking-wide">
            KAVYA VIJAYAN
          </h3>
          <h3 className="text-green-500 text-xl sm:text-3xl lg:text-5xl font-semibold tracking-wide pt-5 lg:pt-10">
            SOFTWARE DEVELOPER
          </h3>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
