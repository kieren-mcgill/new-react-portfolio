import styles from "./styles/Contact.module.css";
import {useState} from "react";
import Button from "./Button.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        senderName: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div id="contact-section" className={styles.contact}>
            <h2 className={styles.contactTitle}>contact</h2>
            <div className={styles.titleUnderline}></div>

            <p>Feel free to contact me using the form below</p>

            <form action="https://formspree.io/f/xbjvklbz" method="post">
                <label>Your name</label>
                <input type="text"
                       required
                       id="fsenderName"
                       name="senderName"
                       placeholder="Enter your name"
                       onChange={handleChange}
                />

                <label>Your email</label>
                <input type="email"
                       required
                       id="email"
                       name="email"
                       placeholder="Enter your email"
                       onChange={handleChange}
                />

                <label>Your message</label>
                <textarea id="message"
                          required
                          cols="30"
                          rows="10"
                          name="message"
                          placeholder="Enter your message"
                          onChange={handleChange}
                >
                </textarea>

                <Button label="send message" submitBtn/>

            </form>

        </div>
    )
}

export default Contact;