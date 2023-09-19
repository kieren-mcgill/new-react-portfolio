/* eslint-disable react/prop-types */
import styles from './styles/Project.module.css';
import SkillPill from './SkillPill';
import Button from "./Button.jsx";

const Project = ({ project }) => {
    return (
        <div className={styles.project}>
            <h3 className={styles.mobileProjectTitle}>{project.title}</h3>
            <div className={styles.imageContainer}>
                <img src={`/assets/project_images/${project.image}`} alt={project.title} className={styles.projectImage} />
                {project.Url && <Button label="demo" navigateTo={project.Url} external demoBtn/>}
            </div>
            <div>
                <h3 className={styles.desktopProjectTitle}>{project.title}</h3>
                <div className={styles.skillList}>
                    {project.techStack &&
                        project.techStack.map((skill, index) => {
                            return <SkillPill key={index} skillName={skill} smallPill/>;
                        })}
                </div>
                <p>{project.blurb}</p>
                {project.GitHubFront && <Button label="client" navigateTo={project.GitHubFront} external code/>}
                {project.GitHubBack && <Button label="server" navigateTo={project.GitHubBack} external code/>}
            </div>
        </div>
    );
};

export default Project;
