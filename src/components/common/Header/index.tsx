import { useState } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-blue-100">
      <div className="p-5 flex items-center justify-between">
        <div className="flex gap-25">
          {/* <h4 className="text-2xl poppins-semibold text-white">
            Kavya Vijayan
          </h4> */}
        </div>

        <div className="flex items-center gap-4">
          <h1 className="text-black hover:text-blue-500 text-2xl">
            <a href="https://www.linkedin.com/in/kavya-vijayan-a89b3525b/">
              <TiSocialLinkedin />
            </a>
          </h1>
          <h1 className="text-black hover:text-green-500 text-2xl">
            <a href="https://github.com/KavyaSunithaVijayan">
              <FaGithub />
            </a>
          </h1>
          <div className="text-black">
            <RxHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 z-50 bottom-0 w-[50%] h-screen bg-[#E5DDF4] transition-transform duration-300 ease-linear  ${showMenu
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
          <li className="text-violet-800 poppins-semibold pb-3">
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
      </div>
    </header>
  );
}

export default Header;
