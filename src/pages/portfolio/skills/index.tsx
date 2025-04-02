import { useKeenSlider } from "keen-slider/react";

function Skills() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 3,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div>
      <div className="py-6 max-w-screen-xl mx-auto" id="what I Do">
        <div className="text-center relative ">
          <span className="text-7xl lg:text-9xl font-bold text-gray-900 opacity-10">
            MY SKILLS
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-2xl lg:text-3xl">
            <p className="w-fit mt-3">
              Skills
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider py-15">
          <div className="keen-slider__slide number-slide1 bg-[#B5BDE1] text-center pb-5">
            <img
              src="./image/code.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">FrontEnd</h2>
            <p>HTML, JavaScript, React, Next.js, Vite</p>
          </div>
          <div className="keen-slider__slide number-slide1 bg-[#E5DDF4] text-center">
            <img
              src="./image/css.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">StyleSheet</h2>
            <p>CSS, TailWind, Bootstrap</p>
          </div>
          <div className="keen-slider__slide number-slide1 bg-[#add8e5] text-center">
            <img
              src="./image/code-01.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">
              Tools & Platforms
            </h2>
            <p>Git, Netlify</p>
          </div>
          <div className="keen-slider__slide number-slide1 bg-[#E5DDF4] text-center">
            <img
              src="./image/api.png"
              alt="code"
              className="w-20 mx-auto py-5"
            />
            <h2 className="text-2xl font-semibold text-black">Others </h2>
            <p>REST APIs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
