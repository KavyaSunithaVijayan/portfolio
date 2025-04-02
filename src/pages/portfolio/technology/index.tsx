
function Technologies() {
  return (
    <div>
      <div className="py-6 max-w-screen-xl mx-auto " id="what I Do">
        <div id="whatIDo" className="text-center relative ">
          <span className="text-7xl lg:text-9xl font-bold text-gray-900 opacity-10">
            TECHNOLOGY
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-2xl lg:text-3xl">
            <p className="w-fit mt-3">
              What I Do
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>
        <div className="py-15 grid grid-cols-1 lg:grid-cols-2 gap-15">
          <p className="text-justify poppins-regular tracking-wider leading-7">
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
              src="/image/html.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-30 hover:opacity-100 cursor-pointer"
              alt="html"
            />
            <img
              src="/image/css.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="css"
            />
            <img
              src="/image/javascript.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="javascript"
            />
            <img
              src="/image/bootstrap.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="bootstrap"
            />
            <img
              src="/image/next.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="next"
            />
            <img
              src="/image/react.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="react"
            />
            <img
              src="/image/tailwind.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="tailwind"
            />
            <img
              src="/image/vite.png"
              className="w-20 m-auto transition duration-100 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
              alt="vite"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
