import React from "react";

function Hero() {
  return (
    <section className="bg-black">
      <div className="flex items-baseline justify-center pt-10 ">
        <h2 className="text-white border text-center px-3 p-2 rounded-full border-white">See what's new? | <span className="text-sky-400">AI Diagram</span></h2>
      </div>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-20 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-sky-300 sm:block">
              {" "}
              Increase Conversion.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-slate-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring  sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
