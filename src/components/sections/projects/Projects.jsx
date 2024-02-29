import Header from '../../common/section_header/Header.jsx'
import Project from './Project.jsx'
import style from './projectsStyles.module.css'

import image1 from '../../../images/projects/dunes.jpg'

const Projects = () => {
  const projects = [
    { 
      title: 'Ode to Summer', 
      tags: ['Unity', 'C#', '2023'], 
      description: 'A simple game made in Unity bla blab bla bla blablablal',
      link: '',
      image: image1,
      col: 3
    },
    { 
      title: 'Ode to Summer', 
      tags: ['Unity', 'C#', '2023'], 
      description: 'A simple game made in Unity bla blab bla bla blablablal',
      link: '',
      image: image1,
      col: 2
    },
    { 
      title: 'Ode to Summer', 
      tags: ['Unity', 'C#', '2023'], 
      description: 'A simple game made in Unity bla blab bla bla blablablal',
      link: '',
      image: image1,
      col: 2
    },
    { 
      title: 'Ode to Summer', 
      tags: ['Unity', 'C#', '2023'], 
      description: 'A simple game made in Unity bla blab bla bla blablablal',
      link: '',
      image: image1,
      col: 3
    },
  ]
  return (
    <section>
      <Header title='My Recent Work' numbering='03' />
      <div className={style.projectGrid}>
        {
          projects.map((item, index) => (
            <Project 
              key={index}
              title={item.title}
              tags={item.tags}
              description={item.description}
              link={item.link}
              image={item.image}
              row={item.row}
              col={item.col}
            />
          ))
        }

      </div>
    </section>
  )
}

export default Projects 