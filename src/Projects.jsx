import styles from './styles/Projects.module.css';
import {listOfProjects} from './content/listOfProjects.js';
import Project from "./Project.jsx";
const Projects = () => {
    return (
        <section id="projects-section" className={styles.projects}>
            <h2 className={styles.projectTitle}>projects</h2>
            <div className={styles.titleUnderline}></div>
            {listOfProjects.map((project, index) => {
                return (
                    <Project key={index} project={project} />
                )
            })}
        </section>
    )
}

export default Projects;