import Animation from "../../../components/content/animationObserver";

function HomePage() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto bg-white grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 items-center py-16 ">
        <div id="home" className="order-2 lg:order-1">
          <h4 className=" text-violet-950 poppins-bold text-4xl lg:text-6xl pb-10 ">
            I'm Kavya Vijayan
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            feugiat a urna consequat fringilla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div className="py-15">
            <a
              href="Xenia\Documents"
              download="KAVYA_VIJAYAN_CURRICULUM_VITAE.pdf"
            >
              <button className="bg-gray-200 hover:bg-amber-300 p-3 rounded-full animate-bounce">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <Animation animationType={"animate__slideInRight "} className="order-2 lg:order-1">
          <img
            src="/image/working_girl.jpg"
            alt="working_girl"
            className="w-96 lg:w-full"
          />
        </Animation>
      </div>
    </div>
  );
}

export default HomePage;
