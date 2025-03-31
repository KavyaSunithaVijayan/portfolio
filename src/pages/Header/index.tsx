import { useState, useEffect } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setIsScroll(window.scrollY > 100);
      });
    };
  }, [isScroll]);

  let stickyHeader;
  if (isScroll === false) {
    stickyHeader = "absolute z-20 bg-gray-200";
  } else {
    stickyHeader = "sticky top-0 z-50 animate-page-header bg-gray-200";
  }
  return (
    <header className={`${stickyHeader}  w-full`}>
      <div className="p-5 flex items-center justify-between">
        <div className="flex gap-25">
       
          <h4 className="text-2xl poppins-semibold text-white">
            Kavya Vijayan
          </h4>
        </div>

        {/* <ul className="grid grid-cols-6 gap-7">
          <li className="text-black hover:text-violet-900 poppins-light">
            Home
          </li>
          <li className="text-black hover:text-violet-900 poppins-light">
            About
          </li>
          <li className="text-black hover:text-violet-900 poppins-light">
            What I Do
          </li>
          <li className="text-black hover:text-violet-900 poppins-light">
            Resume
          </li>
          <li className="text-black hover:text-violet-900 poppins-light">
            Portfolio
          </li>
          <li className="text-black hover:text-violet-900 poppins-light">
            Contact
          </li>
        </ul> */}
        <div className="flex items-center gap-4">
          <h1 className="text-black hover:text-blue-500 text-2xl">
            <TiSocialLinkedin />
          </h1>
          <h1 className="text-black hover:text-green-500 text-2xl">
            <FaGithub />
          </h1>
          <h1 className="text-black">
            <RxHamburgerMenu />
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
