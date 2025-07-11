import { useEffect, useRef, useState } from "react";
import { allExperiences } from "../data/experiences";

const Experiences = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Debug: Log visible items
  useEffect(() => {
    console.log("Visible items:", visibleItems);
  }, [visibleItems]);

  // Urutan chronological yang benar (terbaru ke terlama)
  const experiences = allExperiences;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3],
        rootMargin: "100px 0px -50px 0px",
      }
    );

    // Tunggu sampai semua refs tersedia
    const observeItems = () => {
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.dataset.index = index.toString();
          observer.observe(ref);
        }
      });
    };

    // Observe dengan delay untuk memastikan DOM ready
    const timeoutId = setTimeout(observeItems, 200);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Tambahkan effect untuk debugging dan fallback
  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Item visible jika bagian atas item sudah masuk viewport
          if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        }
      });
    };

    // Jalankan sekali saat component mount
    setTimeout(handleScroll, 300);

    // Tambahkan scroll listener sebagai fallback
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ExperienceCard = ({ experience, index, isVisible }) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        ref={(el) => (itemRefs.current[index] = el)}
        className={`relative flex items-center mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{
          transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
        }}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center">
          {isLeft ? (
            <>
              {/* Left Content */}
              <div className="w-5/12 text-right pr-6 lg:pr-8">
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:bg-zinc-800/70 hover:shadow-lg">
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <span className="text-xl lg:text-2xl">
                      {experience.icon}
                    </span>
                    <h3 className="text-lg lg:text-xl font-semibold text-zinc-50">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 font-medium mb-1 text-sm lg:text-base">
                    {experience.company}
                  </p>
                  <p className="text-xs lg:text-sm text-zinc-500 mb-3">
                    {experience.description}
                  </p>
                  <span className="text-xs text-zinc-400 bg-zinc-700/50 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
              </div>

              {/* Center Line & Dot */}
              <div className="w-2/12 flex justify-center">
                <div className="relative">
                  <div
                    className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r ${experience.color} shadow-lg z-10`}
                  ></div>
                  <div
                    className={`absolute inset-0 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r ${experience.color} animate-ping opacity-20`}
                  ></div>
                </div>
              </div>

              {/* Right Empty */}
              <div className="w-5/12"></div>
            </>
          ) : (
            <>
              {/* Left Empty */}
              <div className="w-5/12"></div>

              {/* Center Line & Dot */}
              <div className="w-2/12 flex justify-center">
                <div className="relative">
                  <div
                    className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r ${experience.color} shadow-lg z-10`}
                  ></div>
                  <div
                    className={`absolute inset-0 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r ${experience.color} animate-ping opacity-20`}
                  ></div>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-5/12 text-left pl-6 lg:pl-8">
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:bg-zinc-800/70 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl lg:text-2xl">
                      {experience.icon}
                    </span>
                    <h3 className="text-lg lg:text-xl font-semibold text-zinc-50">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 font-medium mb-1 text-sm lg:text-base">
                    {experience.company}
                  </p>
                  <p className="text-xs lg:text-sm text-zinc-500 mb-3">
                    {experience.description}
                  </p>
                  <span className="text-xs text-zinc-400 bg-zinc-700/50 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex w-full">
          {/* Left Dot */}
          <div className="flex flex-col items-center mr-4 mt-1">
            <div className="relative">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${experience.color} shadow-lg z-10`}
              ></div>
              <div
                className={`absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r ${experience.color} animate-ping opacity-20`}
              ></div>
            </div>
            {index < experiences.length - 0 && (
              <div
                className="w-0.5 bg-gradient-to-b from-zinc-600 to-zinc-800 mt-2"
                style={{ height: "80px" }}
              ></div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:bg-zinc-800/70">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-lg mt-1">{experience.icon}</span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-zinc-50 leading-tight">
                    {experience.title}
                  </h3>
                </div>
              </div>
              <p className="text-zinc-400 font-medium mb-1 text-sm">
                {experience.company}
              </p>
              <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                {experience.description}
              </p>
              <span className="text-xs text-zinc-400 bg-zinc-700/50 px-2 py-1 rounded-full">
                {experience.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section container" id="experience">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="headline-2 reveal-up mb-4">My Experience Journey</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
          A timeline of my professional growth and learning experiences in
          technology and development.
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Desktop Center Line */}
        <div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-700 opacity-30"
          style={{ height: "90%", top: "5%" }}
        ></div>

        {/* Timeline Items */}
        <div className="relative pt-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isVisible={visibleItems.includes(index)}
            />
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700/50">
            <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm text-zinc-400">
              Currently Growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
