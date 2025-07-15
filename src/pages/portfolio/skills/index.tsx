import { useKeenSlider } from "keen-slider/react";
import Progressbar from "../../../components/content/ProgressBar/progressBar";

function Skills() {
  return (
    <div className="bg-black">
      <div className="py-6 max-w-screen-xl mx-auto" id="what I Do">
        <div className="text-center relative ">
          <span className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white opacity-20">
            MY SKILLS
          </span>
          <p className="dancing-script-medium tracking-widest absolute inset-0 flex flex-col items-center justify-center  text-xl sm:text-2xl lg:text-3xl text-green-500">
            <p className="w-fit mt-3">
              Skills
              <hr className="w-16 mt-3 mx-auto text-white border-[1px]" />
            </p>
          </p>
        </div>
        <div className="py-8 px-3 sm:px-20">
          <div className="">
            <label className="text-white">
              FrontEnd:{" "}
              <h2 className="text-gray-400 py-2 text-xs sm:text-sm">
                HTML, JavaScript, TypeScript, React, Next.js, Vite
              </h2>
            </label>
            <Progressbar bgcolor="orange" progress="60" height={10} />
          </div>
          <div className="pt-7">
            <label className="text-white">
              StyleSheet
              <h2 className="text-gray-400 py-2 text-xs sm:text-sm">
                CSS, Tailwind, Bootstrap
              </h2>
            </label>
            <Progressbar bgcolor="blue" progress="70" height={10} />
          </div>
          <div className="pt-7">
            <label className="text-white">
              Tools & Platform
              <h2 className="text-gray-400 py-2 text-xs sm:text-sm">
                Git, Netlify
              </h2>
            </label>
            <Progressbar bgcolor="green" progress="40" height={10} />
          </div>
          <div className="pt-7">
            <label className="text-white">
              Others
              <h2 className="text-gray-400 py-2 text-xs sm:text-sm">
                REST API's
              </h2>
            </label>
            <Progressbar bgcolor="magenta" progress="75" height={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
