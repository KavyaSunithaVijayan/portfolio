import Animation from "../../../components/content/animationObserver";
import ChromaGrid from "../../../components/content/CustomGrid/ChromaGrid";
import { useState, useEffect } from "react";
function Work() {
  const [showAll, setShowAll] = useState(false);
  const [isMdUp, setIsMdUp] = useState(false);
  const items = [
    {
      image: "/image/work/01.png",
      title: "Sky Mate",
      subtitle: "Weather App",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://skymate-app.netlify.app/",
      description:
        "A responsive weather application built with React, Vite, Tailwind CSS, and TypeScript. Users can search for any location to view real-time weather details including temperature in both Celsius and Fahrenheit, wind speed, andhumidity. The app also displays an animated weather imagebased on the current weather condition of the selected place. Additionally, it shows the sunrise and sunset times for the entered city.",
    },
    {
      image: "/image/work/02.jpg",
      title: "Taste Loop",
      subtitle: "Cooking Receipe App",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://tasteloop.netlify.app/",
    },
    {
      image: "/image/work/03.jpeg",
      title: "Spider TechnoSoft",
      subtitle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://www.spidertechnosoft.com/",
    },
    {
      image: "/image/work/04.jpeg",
      title: "LovelyBees",
      subtitle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://singular-jalebi-cb6ddf.netlify.app/",
    },
    {
      image: "/image/work/05.png",
      title: "YTS Movie Clone",
      subtitle: "",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://ytsmovie-8a4658.netlify.app/",
    },
  ];
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdUp(window.innerWidth >= 768); // Tailwind 'md' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const visibleItems = isMdUp || showAll ? items : items.slice(0, 3);
  return (
    <div>
      <div className="pt-8 max-w-screen-xl mx-auto" id="what I Do">
        <div id="work" className="text-center relative ">
          <span className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white opacity-20">
            MY WORKS
          </span>
          <p className="dancing-script-medium tracking-widest absolute inset-0 flex flex-col items-center justify-center  text-xl sm:text-2xl lg:text-3xl text-green-500">
            <p className="w-fit mt-3">
              Work
              <hr className="w-16 mt-3 mx-auto text-white border-[1px]" />
            </p>
          </p>
        </div>
        <div className="relative py-8">
          <ChromaGrid
            items={visibleItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
        {!isMdUp && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
