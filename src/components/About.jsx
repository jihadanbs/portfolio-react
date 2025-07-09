import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const aboutItems = [
  {
    label: "Projects completed",
    number: 30,
  },
  {
    label: "Certificates achieved",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  // State tetap dibutuhkan untuk memberi tahu CountUp kapan harus mulai
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  // Gunakan useGSAP untuk memicu animasi, ini lebih bersih dari useEffect + IntersectionObserver
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%", // Mulai saat 80% bagian atas elemen masuk viewport
        onEnter: () => {
          // Hanya set state saat elemen terlihat
          setStartCounting(true);
        },
        once: true, // Pastikan animasi hanya berjalan sekali
      });
    },
    { scope: sectionRef }
  );

  return (
    // 'section' class akan mengambil jarak dari CSS global yang sudah kita perbaiki
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        {/* 'reveal-up' sudah dihandle oleh GSAP di App.jsx */}
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <div className="flex justify-between items-start mb-5">
            <h2 className="md:text-4xl text-2xl font-semibold text-zinc-100">
              About Me
            </h2>
            <img
              src="/images/logo-saja.png"
              alt="logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 opacity-60"
            />
          </div>

          <p className="text-zinc-300 mb-8 md:mb-12 md:text-xl md:max-w-[65ch]">
            Hello, my name is Jihadan Beckhianosyuhada. I’m a tech enthusiast
            and freelancer with a passion for Cyberseurity. I have experience in
            Front-end, Back-end, and Blockchain development, and I’m skilled in
            UI/UX design. Always eager to learn and grow, I enjoy turning ideas
            into functional and user-friendly digital solutions.
          </p>

          {/* PERUBAHAN: Gunakan Grid untuk layout yang lebih rapi */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 md:gap-x-8">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center gap-1 md:mb-1">
                  <span className="text-3xl font-semibold md:text-5xl text-sky-400">
                    {/* PERUBAHAN: Gunakan 'enableScrollSpy' & 'scrollSpyDelay' */}
                    {/* CountUp sudah punya fitur trigger on scroll sendiri, tapi kita pakai state untuk kontrol penuh */}
                    {startCounting && (
                      <CountUp
                        start={0}
                        end={number}
                        duration={3}
                        suffix="+"
                        enableScrollSpy={false} // Kita kontrol manual via state
                      />
                    )}
                    {!startCounting && 0}
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
