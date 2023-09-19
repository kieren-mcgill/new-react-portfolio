import styles from './styles/About.module.css';
import {listOfSkills} from "./content/listOfSkills.js";
import SkillPill from "./SkillPill.jsx";
import Button from "./Button.jsx";

const About = () => {
    return (
        <section id="about-section" className={styles.about}>
            <h2 className={styles.aboutTitle}>about me</h2>
            <div className={styles.titleUnderline}></div>
            <div className={styles.aboutBox}>
                <h3>Get to Know Me!</h3>
                <p>
                    I&apos;m a <strong>junior full-stack developer</strong>, currently living in <strong>Sheffield</strong>,
                    UK. I was a teacher for
                    quite a while, working in schools around the world, including the <strong>UK, Thailand and
                    China</strong>.
                    And <strong>I was good at it</strong> too, holding various leadership positions and training
                    colleagues in good practice.</p>
                <p style={{marginBottom: '2rem'}}>
                    But I&apos;m always on the <strong>look out for a challenge</strong>, so I decided to embark on a new
                    journey and retrained as a developer.
                    I love to solve problems and build things that exceed users&apos; needs. So get in contact and maybe we
                    can <strong>build
                    something together</strong>.
                </p>
                    <Button label="my cv" navigateTo="src/assets/Kieren_McGill_CV_23.pdf" external/>
            </div>
            <div>
                <h3>My Skills</h3>
                <div className={styles.skillList}>
                    {listOfSkills.map((skill, index) => {
                        return (
                            <SkillPill key={index} skillName={skill}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default About;