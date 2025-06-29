import Animation from "../../../components/content/animationObserver";
import '../../../App.css';

function HomePage() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto bg-white grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 pb-16 items-center ">
        {/* <div id="home" className="order-2 lg:order-1">
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
        </div> */}
        {/* <Animation animationType={"animate__slideInRight "} className="order-2 lg:order-1"> */}

        {/* </Animation> */}
        <div className="relative">
          <h2 className="text-9xl tracking-widest text-violet-100 font-extrabold"> KAVYA</h2>
          <div className="absolute -top-5 left-30">
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-semibold tracking-wider">HELLO</h2>
              <hr className="text-black w-60 font-bold" />
            </div>
            <h2 className="py-5 text-5xl font-semibold tracking-wider">I AM KAVYA VIJAYAN</h2>
            <span className="text-2xl animative-text !overflow-hidden !whitespace-nowrap !border-r">REACT DEVELOPER</span>


          </div>
        </div>
        <img
          src="/image/working_girl.jpg"
          alt="working_girl"
          className="w-96 lg:w-full"
        />
      </div>
    </div >
  );
}

export default HomePage;
