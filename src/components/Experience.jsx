import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// MATERIAL UI
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";

gsap.registerPlugin(ScrollTrigger);

export default function CustomizedTimeline() {
  const timelineRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      timelineRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#experience",
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play pause none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="section container" id="experience">
      <div>
        <h2 className="headline-2 reveal-up mb-6">My Experiences</h2>
      </div>
      <Timeline position="alternate" >
        {/* FIELD WORK PRACTICE */}
        <TimelineItem ref={(el) => (timelineRefs.current[1] = el)}>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" className="text-zinc-400">
            February 2025 – Recently
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color="primary"
              sx={{
                width: {xs:50,  md: 75 },
                height: {xs:50,  md: 75 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LaptopMacIcon sx={{ width: { xs: 25, md: 40 }, height: { xs: 25, md: 40 } }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              DBS Foundation
            </Typography>
            <Typography className="text-zinc-400">Dicoding, DBS Foundation</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* INTERNSHIP */}
        <TimelineItem ref={(el) => (timelineRefs.current[0] = el)} >
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.blue"
            className="text-lg font-semibold text-zinc-400 hover:text-blue-400"
          >
            Maret 2023 - Recently
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: "50px" }} />
            <TimelineDot
              sx={{
                width: {xs:50,  md: 75 },
                height: {xs:50,  md: 75 },
                backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BusinessIcon sx={{ width: { xs: 30, md: 40 }, height: { xs:30, md: 40 } }} />
            </TimelineDot>
            <TimelineConnector sx={{ height: "50px" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "20px", px: 2, m: "auto 0" }}>
            <Typography variant="h6" component="span">
              Freelancer
            </Typography>
            <Typography className="text-zinc-400">Freelance</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* FIELD WORK PRACTICE */}
        <TimelineItem ref={(el) => (timelineRefs.current[1] = el)}>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" className="text-zinc-400">
            February – June 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color="primary"
              sx={{
                width: {xs:50,  md: 75 },
                height: {xs:50,  md: 75 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LaptopMacIcon sx={{ width: { xs: 25, md: 40 }, height: { xs: 25, md: 40 } }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Internship Full Stack Developer
            </Typography>
            <Typography className="text-zinc-400">Diskominfo Pesawaran, Lampung</Typography>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
  );
}
