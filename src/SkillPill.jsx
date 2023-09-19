import styles from './styles/SkillPill.module.css';
// eslint-disable-next-line react/prop-types
const SkillPill = ( { skillName, smallPill }) => {
    return (
        <p className={smallPill ? styles.smallPill : styles.skillPill}>{skillName}</p>
    )
}

export default SkillPill;