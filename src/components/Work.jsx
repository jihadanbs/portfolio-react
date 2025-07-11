import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const works = allProjects.slice(0, 3);

const Work = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card-item", // Target semua kartu projek
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15, // Jeda sedikit lebih lama
          scrollTrigger: {
            trigger: container.current, // Trigger-nya cuma satu
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-3 reveal-up">Portfolio</h2>
        <p className="text-zinc-400 mt-1 mb-5 max-w-[50ch] reveal-up">
          Explore a curated collection of my work, showcasing the projects and
          skills I’ve mastered over time.
        </p>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, desc, tags, github, livePreview }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                desc={desc}
                tags={tags}
                github={github}
                livePreview={livePreview}
                className="reveal-up"
              />
            )
          )}
        </div>
        <div className="flex justify-center">
          <button>
            <Link
              to="/project"
              className="btn bg-sky-500 hover:bg-sky-400 text-white mt-5"
            >
              Load more
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
