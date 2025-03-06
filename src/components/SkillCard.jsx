import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 }, // Mulai dari bawah dengan opacity 0
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", // Mulai animasi saat 85% elemen masuk viewport
          once: true, // Animasi hanya berjalan sekali
        }
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ${classes}`}
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img 
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
        />
      </figure>
      <div className="skill-card__info">
        <h3 className="text-white font-semibold">{label}</h3>
        <p className='text-zinc-400 text-sm'>{desc}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
