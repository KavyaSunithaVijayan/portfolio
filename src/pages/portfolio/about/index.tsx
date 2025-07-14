function About() {
  return (
    <div className="bg-black">
      <div className="py-6 max-w-screen-xl mx-auto px-3">
        <div className="flex gap-5 lg:gap-10 items-center justify-center">
          <div id="about" className="text-center relative ">
            <span className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white opacity-20">
              ABOUT ME
            </span>
            <p className="absolute inset-0 flex flex-col items-center justify-center text-xl sm:text-2xl lg:text-3xl text-green-500">
              <p className="w-fit mt-3">
                Know Me More
                <hr className="w-16 mt-3 mx-auto text-white border-[1px]" />
              </p>
            </p>
          </div>
        </div>

        <div className="py-15 grid grid-cols-1 lg:grid-cols-3 gap-15 lg:gap-20 items-center">
          <div className="col-span-1 lg:col-span-2">
            <p className="text-xl sm:text-3xl poppins-semibold tracking-wide text-white">
              I'm <span className="text-green-500">Kavya Vijayan,</span>a Web
              Developer
            </p>
            <p className="text-justify pt-5 poppins-regular tracking-wider leading-7 text-white">
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

          <div className="cols-span-1">
            <ul>
              <li className="tracking-wide ">
                <div className="flex">
                  <h2 className="poppins-semibold text-white"> Name : </h2>
                  <h2 className="text-white poppins-regular px-2">
                    Kavya Vijayan
                  </h2>
                </div>
              </li>
              <li>
                <span className="poppins-semibold text-white">Email : </span>{" "}
                <span className="poppins-semibold text-white">
                  {" "}
                  <span className="poppins-regular text-white px-2">
                    {" "}
                    kavyavijayan6713@gmail.com
                  </span>
                </span>
              </li>
              <li>
                <span className="poppins-semibold text-white">Age : </span>
                <span className="poppins-regular text-white px-2"> 24</span>
              </li>
              <li>
                <span className="poppins-semibold text-white">From :</span>
                <span className="poppins-regular text-white px-2">
                  Ernakulam, Kerala
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
