import { useState } from 'react';
import styles from './styles/Header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header id="header">
            <a href='#' className={styles.logo} >
                    <FontAwesomeIcon icon={faCode} />
                <p>KIEREN MCGILL</p>
            </a>
            <ul className={`${styles.navMenu} ${isMenuOpen && styles.active}`}>
                <li className={styles.navItem}><a href="#">HOME</a></li>
                <li className={styles.navItem}><a href="#about-section">ABOUT</a></li>
                <li className={styles.navItem}><a href="#projects-section">PROJECTS</a></li>
                <li className={styles.navItem}><a href="#contact-section">CONTACT</a></li>
            </ul>
            <div className={`${styles.hamburger} ${isMenuOpen && styles.active}`} onClick={toggleMenu}>
                <div className={`${styles.burgerLine} ${isMenuOpen && styles.active}`}></div>
                <div className={`${styles.burgerLine} ${isMenuOpen && styles.active}`}></div>
                <div className={`${styles.burgerLine} ${isMenuOpen && styles.active}`}></div>
            </div>
        </header>
    );
};

export default Header;
