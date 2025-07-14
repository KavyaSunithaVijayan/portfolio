function Technologies() {
  return (
    <div className="bg-black">
      <div className="py-6 max-w-screen-xl mx-auto px-3" id="what I Do">
        <div id="whatIDo" className="text-center relative ">
          <span className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white opacity-20">
            TECHNOLOGY
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-xl sm:text-2xl lg:text-3xl text-green-500">
            <p className="w-fit mt-3">
              What I Do
              <hr className="w-16 mt-3 mx-auto text-white border-[1px]" />
            </p>
          </p>
        </div>
        <div className="py-15 grid grid-cols-1 lg:grid-cols-2 gap-15">
          <p className="text-justify poppins-regular tracking-wider leading-7 text-white">
            I am a proficient web developer with experience in front-end
            development, performance optimization, and designing and integrating
            admin panels. I specialize in integrating APIs into user-friendly
            interfaces, ensuring seamless and efficient performance. My focus is
            on building fast, responsive web applications that meet both
            business and user needs, while delivering clean, maintainable code
            and optimized solutions.
          </p>
          <div className="grid grid-cols-4 gap-5">
            <img
              src="/image/technologies/html.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer "
              alt="html"
            />
            <img
              src="/image/technologies/css.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"
              alt="css"
            />
            <img
              src="/image/technologies/javascript.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"
              alt="javascript"
            />
            <img
              src="/image/technologies/bootstrap.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"
              alt="bootstrap"
            />
            <img
              src="/image/technologies/next.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer bg-green-50 px-1"
              alt="next"
            />
            <img
              src="/image/technologies/react.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"
              alt="react"
            />
            <img
              src="/image/technologies/tailwind.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"
              alt="tailwind"
            />
            <img
              src="/image/technologies/vite.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"
              alt="vite"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
