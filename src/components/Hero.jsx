import { useRef, useEffect, useState } from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const containerRef = useRef(null);

  const statusTexts = [
    "Open to Work",
    "Ready for Challenges",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % statusTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-20 sm:top-40 left-20 sm:left-40 w-30 sm:w-40 lg:w-60 h-30 sm:h-40 lg:h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fafafa' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status Line */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full p-0.5">
                  <div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center">
                    <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                      J
                    </span>
                  </div>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 sm:w-4 h-3 sm:h-4 bg-emerald-500 rounded-full border-2 border-zinc-900 animate-pulse"></div>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="font-medium transition-all duration-500">
                  {statusTexts[currentText]}
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-zinc-50 mb-1">Hello, I&apos;m</span>
              <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Jihadan Beckhiano S
              </span>
              <span className="block text-zinc-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mt-2">
                Full Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-sm sm:text-base lg:text-lg text-zinc-400 mb-6 sm:mb-8 max-w-md sm:max-w-lg lg:max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Passionate about creating digital experiences that make a
              difference. Let&apos;s build something amazing together.
            </p>

            {/* Buttons */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap ...`}
            >
              <ButtonPrimary
                label="Download CV"
                href="/file/cv.pdf"
                target="_blank"
                icon={
                  // <-- Berikan ikon SVG sebagai komponen
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                }
              />
              <ButtonOutline
                label="Learn More"
                href="#about"
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main Image Container */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl sm:rounded-3xl rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-zinc-800 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl shadow-sky-500/10">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src="/images/foto.jpg"
                      alt="Jihadan Beckhianosyuhada"
                      className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating Skills */}
              <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 bg-zinc-800 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2 shadow-lg shadow-sky-500/20 animate-bounce ring-1 ring-sky-500/20">
                <span className="text-xs sm:text-sm font-medium text-zinc-300">
                  Laravel
                </span>
              </div>
              <div
                className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 bg-zinc-800 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2 shadow-lg shadow-blue-500/20 animate-bounce ring-1 ring-blue-500/20"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-xs sm:text-sm font-medium text-zinc-300">
                  Linux
                </span>
              </div>
              <div
                className="absolute top-1/2 -right-8 sm:-right-10 lg:-right-12 bg-zinc-800 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2 shadow-lg shadow-purple-500/20 animate-bounce ring-1 ring-purple-500/20"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-xs sm:text-sm font-medium text-zinc-300">
                  Cybersecurity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-zinc-500 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-zinc-500 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
