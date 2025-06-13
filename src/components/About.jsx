import{ useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const aboutItems = [
  { 
    label: 'Projects completed', 
    number: 45 
  },
  { 
    label: 'Certificates achieved', 
    number: 10
  },
  { 
    label: 'years of experience', 
    number: 4
  }
];

const About = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null); // Ref for section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true); // Start CountUp animation when element is visible
        }
      },
      {
        threshold: 0.5, // Detect the element when 50% of it enters the viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <section id='about' className='section' ref={sectionRef}>
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <h2 className='mb-5 md:text-4xl  text-2xl font-semibold text-zinc-100'>About Me</h2>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[62ch]'>
          Hello, my name is Jihadan Beckhianosyuhada.
          I’m a tech enthusiast and freelancer with a passion for Web3. I have experience in Front-end, Back-end, and Blockchain development, and I’m skilled in UI/UX design. Always eager to learn and grow, I enjoy turning ideas into functional and user-friendly digital solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  {/* Only display CountUp when the element has entered the viewport */}
                  <span className='text-2xl font-semibold md:text-4xl'>
                    {startCounting ? (
                      <CountUp start={0} end={number} duration={3} />
                    ) : (
                      number
                    )}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo-saja.png"
              alt="logo"
              width={30}
              height={30}
              className='ml-auto md:w-[40px] md:h-[40px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
