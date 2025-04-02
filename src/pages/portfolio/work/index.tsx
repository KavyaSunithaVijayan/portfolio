import Animation from "../../../components/content/animationObserver";
function Work() {
  return (
    <div>
      <div className="py-6 max-w-screen-xl mx-auto" id="what I Do">
        <div id="work" className="text-center relative ">
          <span className="text-7xl lg:text-9xl font-bold text-gray-900 opacity-10">
            MY WORKS
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-2xl lg:text-3xl">
            <p className="w-fit mt-3">
              Work
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>
        <Animation animationType={"animate__slideInUp"}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-15">
            <div className="relative group w-full overflow-hidden ">
              <a
                href="#"
                className="block max-w-sm"
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
                  An online platform that allows businesses and individuals to
                  buy and sell products or services over the internet. It
                  provides a seamless shopping experience with features like
                  product listings, secure payment gateways, user accounts, and
                  order tracking.
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
                  purchase movies and TV shows from various genres. These
                  websites provide a vast collection of content, including the
                  latest releases, classic films, and exclusive originals.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="hover-underline poppins-light">
                  {" "}
                  See Website
                </button>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
}

export default Work;
