import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ imgSrc, title, desc, tags, livePreview, github, classes }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}
    >
      {/* Gambar Proyek */}
      <figure className="relative h-60 w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay & Icon saat hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 bg-black/50">
          {/* Live Preview */}
          <a
            href={livePreview || "#"}
            target="_blank"
            style={{
              cursor: livePreview  ? 'pointer' : 'not-allowed', 
            }}
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center icon-hover"
          >
            <span className="material-symbols-rounded text-3xl text-white icon-hover ">visibility</span>
            <span className="text-sm mt-1 text-white ">Live Preview</span>
          </a>

          {/* GitHub */}
          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: github ? 'pointer' : 'not-allowed', 
            }}
            className={`flex flex-col items-center justify-center ${github ? 'github-link' : 'disabled-link'}`}
          >
            <span className="material-symbols-rounded text-3xl text-white icon-hover">code</span>
            <span className="text-sm mt-1 text-white">Code</span>
          </a>

        </div>
      </figure>

      {/* Informasi Proyek */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-400 my-1">{desc}</p>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span key={key} className="h-8 text-sm text-sky-500 bg-zinc-50/5 peer-hover:bg-slate-500 grid items-center px-3 rounded-lg">
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Tautan Proyek */}
      <a href={github} target="_blank" rel="noopener noreferrer" className="absolute inset-0 cursor-pointer z-20"></a>
    </div> 
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  livePreview: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
