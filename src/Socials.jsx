import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import styles from './styles/Socials.module.css';

const Socials = () => {
    let socialBoxStyle = styles.socialsBox;

    return (
        <div className={socialBoxStyle}>
            <a className={styles.socialsLink} href="https://github.com/kieren-mcgill" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a className={styles.socialsLink} href="https://linkedin.com/in/kieren-mcgill-b88a14179" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
        </div>
    )
}

export default Socials;