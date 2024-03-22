import ArrowRight from '../common/arrows/ArrowRight.jsx'
import Project from './Project'

import style from './index.module.css'

import eden from '../../assets/images/projects/Eden.png'
import helios from '../../assets/images/projects/Helios.png'
import typing from '../../assets/images/projects/Typing.png'
import anime from '../../assets/images/projects/Anime.png'

const PROJECTS = [
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

export default Projects