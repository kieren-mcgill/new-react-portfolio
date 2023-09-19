import styles from './styles/Dots.module.css';
const Dots = () => {
    return (
        <div className={styles.blinkingDots}>
            <div className={styles.blink1}></div>
            <div className={styles.blink2}></div>
            <div className={styles.blink3}></div>
        </div>
    )
}
export default Dots;