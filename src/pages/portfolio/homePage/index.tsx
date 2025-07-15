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
              <a
                href="https://www.linkedin.com/in/kavya-vijayan-a89b3525b/"
                target="_blank"
              >
                <button className="text-white hover:text-blue-500 text-2xl relative z-20 cursor-pointer">
                  <TiSocialLinkedin />
                </button>
              </a>
              <a href="https://github.com/KavyaSunithaVijayan" target="_blank">
                <button className="text-white  hover:text-green-500 text-2xl relative z-20 cursor-pointer">
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </header>
        <div className="absolute inset-0  flex flex-col justify-center text-center">
          <h3 className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold tracking-wide">
            KAVYA VIJAYAN
          </h3>
          <h3 className="text-green-600 text-xl sm:text-3xl lg:text-5xl font-semibold tracking-wide pt-5 lg:pt-10">
            SOFTWARE DEVELOPER
          </h3>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
