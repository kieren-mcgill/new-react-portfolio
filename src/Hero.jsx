import styles from './styles/Hero.module.css';
import Button from "./Button.jsx";
import Dots from "./Dots.jsx";
const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Hi there, I&apos;m Kieren McGill</h1>
            <h3 className={styles.projectBtn}>A junior software developer based in Sheffield, UK</h3>
            <Button label="see my projects" navigateTo="#projects-section" />
            <Dots/>
        </section>
    )
}

export default Hero