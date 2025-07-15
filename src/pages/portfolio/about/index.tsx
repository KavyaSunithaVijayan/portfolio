import "animate.css";

function About() {
  return (
    <div>
      <div className="pt-8 max-w-screen-xl mx-auto px-3">
        <div className="flex gap-5 lg:gap-10 items-center justify-center">
          <div id="about" className="text-center relative">
            <span className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white opacity-20">
              ABOUT ME
            </span>
            <p className="dancing-script-medium tracking-widest absolute inset-0 flex flex-col items-center justify-center text-xl sm:text-2xl lg:text-3xl text-green-500">
              <p className="w-fit mt-3">
                Know Me More
                <hr className="w-16 mt-3 mx-auto text-white border-[1px]" />
              </p>
            </p>
          </div>
        </div>

        <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-x-15 lg:gap-x-20 items-center">
          <div className="col-span-1">
            <p className="text-md sm:text-3xl poppins-semibold tracking-wide text-white">
              I'm <span className="text-white">Kavya Vijayan, </span>a Web
              Developer
            </p>
            <p className="text-justify pt-5 poppins-regular tracking-wider leading-7 text-white text-sm sm:text-lg">
              I am a passionate web developer with expertise in React and
              Next.js. I specialize in building responsive, user-friendly
              interfaces that deliver seamless user experiences across modern
              web applications. With a strong focus on performance and
              scalability, I enjoy solving problems and continuously expanding
              my skills. <br />
              <br />
              My commitment to clean code and continuous learning helps me stay
              current with the latest technologies and deliver high-quality,
              maintainable solutions.
            </p>
            <div className="py-3">
              <a
                href="/documents/KAVYA_VIJAYAN_CURRICULUM_VITAE.pdf"
                download="KAVYA_VIJAYAN_CURRICULUM_VITAE.pdf"
              >
                <button className="bg-green-500 text-white rounded-full px-2 py-2 cursor-pointer">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-0 sm:gap-8">
            <div className="flex flex-col items-center gap-y-3 sm:gap-y-8">
              <div className="rounded-full shadow-lg object-cover overflow-hidden w-3/4 sm:w-[250px] lg:w-[200px] h-full sm:h-[250px] lg:h-[200px]">
                <img
                  src="/image/about/01.jpeg"
                  alt="BPOS01.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-t-full rounded-br-full shadow-lg object-cover overflow-hidden w-3/4 sm:w-[250px] lg:w-[200px] h-full sm:h-[250px] lg:h-[200px]">
                <img
                  src="/image/about/02.jpeg"
                  alt="BPOS03.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-5 sm:gap-y-8">
              <div className="animate__animated animate__bounce animate__infinite animate__slower rounded-tr-full rounded-b-full shadow-lg object-cover overflow-hidden w-3/4 sm:w-[250px] lg:w-[200px] h-full sm:h-[250px] lg:h-[200px] mt-24">
                <img
                  src="/image/about/03.jpg"
                  alt="BPOS02.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-full shadow-lg object-cover overflow-hidden w-3/4 sm:w-[250px] lg:w-[200px] h-full sm:h-[250px] lg:h-[200px]">
                <img
                  src="/image/about/04.jpg"
                  alt="BPOS04.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
