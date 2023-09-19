import styles from './styles/Footer.module.css';
import Socials from "./Socials.jsx";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <h3>Kieren McGill</h3>
                <p>A junior software developer based in Sheffield, UK</p>
            </div>
            <div>
                <h3>Socials</h3>
                <Socials/>
                <p className={styles.copyright}>© Copyright {new Date().getFullYear()} - Built by Kieren McGill, based on design by <a href="https://rammaheshwari.com" target="_blank" rel="noopener noreferrer" >Ram Maheshwari</a></p>
            </div>

        </div>

    )
}

export default Footer;