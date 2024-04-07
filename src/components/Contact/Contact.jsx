import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <a href="mailto:ewan.a.stanich@gmail.com" className={styles.button}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <p>ewan.a.stanich@gmail.com</p>
          </li>
        </a>
        <a href="https://github.com/EwanStanich" className={styles.button}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github Icon"
            />
            <p>EwanStanich</p>
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/ewan-stanich-06047921a/"
          className={styles.button}
        >
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn Icon"
            />
            <p>Ewan Stanich</p>
          </li>
        </a>
      </ul>
    </footer>
  );
};
