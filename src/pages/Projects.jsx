import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import ReactLenis from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const works = allProjects;

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas setiap kali halaman dimuat
  }, []);
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 }, // Mulai dari posisi di bawah dan transparan
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <ReactLenis root classes="reveal-up">
      <section className="section" id="work">
        <div className="container">
          <div className="flex justify-between">
            <h2 className="headline-2 mb-8 reveal-up">Portofolio saya</h2>
            <Link to="/" className="btn btn-primary reveal-up">
              Back
            </Link>
          </div>
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
                  classes="reveal-up"
                />
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </ReactLenis>
  );
};

export default Projects;
