import SkillCard from "./SkillCard";
import { allSkill } from "../data/skills";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const skillItem = allSkill;

const Skill = () => {
  const container = useRef(null); // Ref untuk section utama

  useGSAP(
    () => {
      // GSAP akan mencari SEMUA elemen dengan class .skill-card-item
      // di dalam scope `container`
      gsap.fromTo(
        ".skill-card-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1, // <-- Memberi jeda 0.1s antar animasi kartu.
          scrollTrigger: {
            trigger: container.current, // Trigger-nya CUMA SATU: yaitu container.
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div>
      <section className="section" id="skill" ref={container}>
        <div className="container">
          <h2 className="headline-2 reveal-up">The Various Tools I Master</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
