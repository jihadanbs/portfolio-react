// Components
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Review2 from './components/Sertifikat';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomizedTimeline from './components/Experience';



// NODE MODULE
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Sertifikat from './components/Sertifikat';

// Daftar gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
 
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element)=>{
      gsap.to(element, {
        scrollTrigger:{
          trigger:element,
          start:'-100 bottom',
          end:"bottom 80%",
          scrub:true,  
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'

      })
    })
  })

  return (
    <ReactLenis root classes="reveal-up">
    <Header/>
   <main>
    <Hero/>
    <About />
    <Skill/>
    <Work/>
    <Sertifikat/>
     <CustomizedTimeline/>
    <Contact/>
   </main>
    <Footer/>
    </ReactLenis>
  )
}

export default App
