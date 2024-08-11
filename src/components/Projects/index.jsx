import ArrowRight from '../common/arrows/ArrowRight.jsx'
import Project from './Project'

import style from './index.module.css'

import stucado from '../../assets/images/projects/Stucado.png'
import eden from '../../assets/images/projects/Eden.png'
import helios from '../../assets/images/projects/Helios.png'
import typing from '../../assets/images/projects/Typing.png'
import anime from '../../assets/images/projects/Anime.png'

import rag from '../../assets/images/projects/RAG.jpg'
import kewoc from '../../assets/images/projects/KEWOC.png'

const PROJECTS = [
  {
    title: 'Stucado',
    tags: ['2024', 'React', 'Electron', 'SQLite', 'Productivity Tool'],
    image: stucado,
    description: 'Stucado is a data-driven productivity tool tailored for university students, and was created for NUS Orbital 23/24 at Apollo (advanced) level. The project is feature rich and includes a customized to-do lists, timetable integration, adaptive pomodoro timers and insightful statistics visualizations with machine learning features. Moreover, the system is extensively documented in a 60 page README, going in depth on the various design decisions and challenges faced during each stage of development.',
    link: 'https://github.com/AustinKong/stucado'
  },
  {
    title: 'Eden',
    tags: ['2023', 'Unity', 'C#', 'Blockbench'],
    image: eden,
    description: 'Eden, formerly "Mind Gardens", is a simple gardening simulator with charming 3D pixel art graphics, and beautiful ambiance effects. Tend to your garden and grow flowers, the game was designed to provide a calming experience. You might even get surprise visits from a snails!',
    link: 'https://github.com/AustinKong/mind-gardens'
  },
  {
    title: 'Helios',
    tags: ['2023', 'Unity', 'C#', 'Physics Simulation'],
    image: helios,
    description: `Project "Helios", is a planetary simulation built using Unity, based on Newton's universal law of gravitation and Kepler's 1st law of planetary motion. Create different celestial bodies such as stars, planets, moons, satellites and comets, and customize the color, name, density, diamter and mass. Watch as planets dance gracefully around each other, or make them crash resulting in chaos!`,
    link: 'https://github.com/AustinKong/helios'
  },
  {
    title: 'Emoji Type',
    tags: ['2023', 'HTML', 'CSS', 'Javascript', 'Typing Test'],
    image: typing,
    description: 'Emoji Type, formerly Typing Test, is a simple, real-time, minimalist typing test website built fully using basic HTML, CSS and Javascript. It attempts to mimic MonkeyType with real-time statistics tracking, 4 typing modes and randomly generated quotes from an external API. This was a passion project I worked on during my period of obsession with typing speed and keyboards.',
    link: 'https://github.com/AustinKong/typing-test'
  },
  {
    title: 'My Animanga',
    tags: ['2021', 'Electron', 'HTML', 'CSS', 'Series Tracker'],
    image: anime,
    description: `My Animanga, formerly Anime List, is a tool for keeping track of anime and manga series. It can be used to search for, and keep track of up to date anime/manga information, thanks to the AniList API. Users can manage custom lists with their favourite shows, which are saved to memory. This project was created during my Weaboo phase, I'm well over it now.`,
    link: 'https://github.com/AustinKong/anime-list'
  },
]

const Projects = () => {
  return (
    <section 
      className={style.projects}
      id="Works" 
    >
      <header>
        <ArrowRight 
          text={`WHAT I \nHAVE DONE`}
        />
        <h2>
          RECENT WORK
        </h2>
      </header>

      <div
        className={style.projectsContainer}
      >
        {
          PROJECTS.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              tags={project.tags}
              image={project.image}
              description={project.description}
              id={index + 1}
              link={project.link}
            />
          ))
        }
      </div>
    </section>
  )
}

const COMMUNITY_PROJECTS = [
  {
    title: 'RAG & FLAG',
    tags: ['2024', 'Fundraising', 'Performance'],
    image: rag,
    description: 'RAG (Receiving and giving) is one of the biggest yearly performances in NUS, and serves as a platform for students to thank everyone for their fundraising efforts. I was part of the 2024 King Edward VII Hall x Pioneer House RAG committee, and was involved in the planning and execution of the performance as a Floats Head. Me and other three Floats Heads were responsible for leading a team of 60+ students to build floats and props for the performance, in which we won silver!',
  },
  {
    title: 'KEWOC & EC',
    tags: ['2024', 'Orientation Camp', 'KEVII'],
    image: kewoc,
    description: 'King Edward VII Hall Orientation Camp (KEWOC) and Engagement Camp (EC) are annual camps held for freshmen of King Edward VII Hall to help them integrate into the hall community. I was part of the 2024 KEWOC and EC committee, and was involved in the planning and execution of the camps as the programmes director. Me and my team were in charge of organizing all camp activities and timelines, which include camp games, icebreakers, and night activities.',
  }
]

const Community = () => {
  return (
    <section
      className={style.projects}
      id="Community"
      >
      <header>
        <ArrowRight 
          text={`EXTRA \nCURRICULARS`}
        />
        <h2>
          COMMUNITY
        </h2>
      </header>

      <div
        className={style.projectsContainer}
      >
        {
          COMMUNITY_PROJECTS.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              tags={project.tags}
              image={project.image}
              description={project.description}
              id={index + 1}
              link={project.link}
            />
          ))
        }
      </div>
    </section>
  )
}

export { Projects, Community }