import styles from './styles/Button.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const Button = ({label, navigateTo, external, code, demoBtn, submitBtn}) => {

    let className = styles.btn;
    let buttonLabel = label;
    if (code) {
        className = styles.btnCode;
        buttonLabel = <><FontAwesomeIcon icon={faCode}/><span> {label}</span></>;
    } else if (demoBtn) {
        className = `${styles.btnCode} ${styles.btnDemo}`;
        buttonLabel = <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>;
    } else if (submitBtn) {
        className = `${styles.btn} ${styles.btnSubmit}`;
    }

    return (
        <>
            {navigateTo &&
                <a className={className} href={navigateTo} target={external ? '_blank' : '_self'}
                   rel={external ? 'noopener noreferrer' : ''}>
                    {buttonLabel}
                </a>}
            {submitBtn && <button className={className} type="submit">send</button>}
        </>
    )
}
export default Button;