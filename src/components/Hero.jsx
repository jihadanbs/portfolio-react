import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonPrimary, ButtonOutline } from "./Button";
import TypeIt from "typeit-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  useGSAP(() => {
    // Animasi untuk gambar 
    gsap.fromTo(
      ".hero-image, figure.img-boxr", 
      { opacity: 0, y: 50 },  
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: "power2.out", 
        scrollTrigger: {
          trigger: ".hero-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
        ".img-box, .lampu-hijau",  // Animasi untuk img-box
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: ".img-box",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

    // Animasi untuk h2 (judul)
    gsap.fromTo(
      ".hero-title", 
      { opacity: 0, y: 30 },  
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out", 
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 90%",
          once: true,
        }
      }
    );

    // Animasi untuk tombol
    gsap.fromTo(
      ".hero-buttons", 
      { opacity: 0, y: 30 },  
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.2, // Beri jeda agar animasi terjadi setelah h2
        ease: "power2.out", 
        scrollTrigger: {
          trigger: ".hero-buttons",
          start: "top 90%",
          once: true,
        }
      }
    );

  }, []);

  return (
    <div>
      <section id='home' className="pt-20 lg:pt-30">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img src="/images/icon.png"
                     width={40}
                     height={40}
                     alt="Jihadan Beckhianosyuhada"
                     className='img-cover' />
              </figure>
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="lampu-hijau relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                <TypeIt className="text-blue-400" options={{ 
                  strings:['Open to work!, Ready for any job!'],
                  cursorChar: "_",
                  speed: 100, 
                  deleteSpeed: 100, 
                  nextStringDelay: 1000, 
                  loop: true, 
                  loopDelay: 8500, 
                }}/>
              </div>
            </div>

            <h2 className='hero-title headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
              Welcome to Jihadan Beckhianosyuhada Portfolio
            </h2>

            <div className="hero-buttons flex items-center gap-3">
              <ButtonPrimary label="Download CV" icon="download" href={'/file/cv.pdf' } target="_blank"/>
              <ButtonOutline href="#about" label='scroll down' icon="arrow_downward" />
            </div>
          </div>

          {/* Gambar dengan animasi fade-in */}
          <div className="">
          <figure className="hero-image group w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img 
              src="/images/pp.jpg"
              width={656}
              height={800}
              alt="Jihadan Beckhianosyuhada"
              className="w-full grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          </figure>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
