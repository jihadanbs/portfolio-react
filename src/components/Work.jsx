import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const works = [
    {
      imgSrc: '/images/portfolio/ppid.png',
      title: 'Website PPID Kab. Pesawaran', 
      desc:'Redesign dan redevelop Website PPID Kabupaten Pesawaran for 5 Months',
      tags: ['PHP', 'CI 4', 'Bootstrap 5', 'JQuery' ,'XAMPP', 'MySQL', 'Javascript', 'Internship'],
      github: '',
      livePreview:'https://ppid.pesawarankab.go.id/',
      githubDisabled: true
    },
    {
      imgSrc: '/images/portfolio/alhabsa.png',
      title: 'AL Habsa Umrah Travel',
      desc: 'AL Habsa Umrah Travel Website',
      tags: ['React Js', 'Vite'],
      github: '',
      livePreview: 'https://al-habsa-umrah-travel.vercel.app/',
    },
    {
      imgSrc: '/images/portfolio/quenny.png',
      title: 'Quenny Laundry',
      desc: 'Platform for laundry ordering and cashier system',
      tags: ['PHP Native', 'CSS', 'Javascript', 'Freelancer'],
      github: '',
      livePreview: 'http://quennylaundry.my.id/',
    },
  ];

const Work = () => {
  return (
    <section className='section'
    id='work'
    >
        <div className="container">
        <h2 className='headline-2 mb-3 reveal-up'>
          Portfolio
        </h2>
        <p className='text-zinc-400 mt-1 mb-5 max-w-[50ch] reveal-up'>
        Explore a curated collection of my work, showcasing the projects and skills I’ve mastered over time.
            </p>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, desc, tags,github, livePreview}, key) => (
                   <ProjectCard
                   key={key}
                   imgSrc={imgSrc}
                   title={title}
                   desc={desc}
                   tags={tags}
                   github={github}
                   livePreview={livePreview}
                   className="reveal-up"/>
                ))}
            </div>
            <div className="flex justify-center">
            <button>
            <Link to="/project"
            className='btn bg-sky-500 hover:bg-sky-400 text-white mt-5'>
            Load more</Link></button>
            </div>
        </div>
    </section>
  )
}

export default Work
