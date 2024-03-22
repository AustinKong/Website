import ArrowRight from '../common/arrows/ArrowRight.jsx'
import Project from './Project'

import style from './index.module.css'

import keviiCoverage from '../../assets/images/projects/keviiCoverage.png'

const PROJECTS = [
  {
    title: 'KEVII Coverage',
    tags: ['2023', 'React', 'Camera', 'Javascript'],
    image: keviiCoverage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida velit vitae congue tristique. Nulla pellentesque erat purus, quis ornare lacus feugiat vel. Curabitur placerat orci quis sem interdum interdum. Curabitur rutrum velit vitae dapibus porttitor. Maecenas ullamcorper eleifend purus eget gravida. Phasellus at posuere enim, ut maximus erat. Nam id nisl eget neque luctus euismod. Donec ante turpis, tempus eget diam in, semper placerat elit. Maecenas finibus urna vitae eros egestas, ac placerat nulla maximus. Mauris tempor leo eget magna fermentum, non ullamcorper tellus tincidunt.',
    link: ''
  },
  {
    title: 'KEVII Coverage',
    tags: ['2023', 'React', 'Camera', 'Javascript'],
    image: keviiCoverage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida velit vitae congue tristique. Nulla pellentesque erat purus, quis ornare lacus feugiat vel. Curabitur placerat orci quis sem interdum interdum. Curabitur rutrum velit vitae dapibus porttitor. Maecenas ullamcorper eleifend purus eget gravida. Phasellus at posuere enim, ut maximus erat. Nam id nisl eget neque luctus euismod. Donec ante turpis, tempus eget diam in, semper placerat elit. Maecenas finibus urna vitae eros egestas, ac placerat nulla maximus. Mauris tempor leo eget magna fermentum, non ullamcorper tellus tincidunt.',
    link: ''
  }
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