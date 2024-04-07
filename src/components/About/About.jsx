import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/student1.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Student at the University of Queensland</h3>
              <p>
                I am currently studying a bachelor of
                Mathematics/ComputerScience majoring in statistics and machine
                learning
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience creating features for android, iOS and web
                applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I also have experience working on large APIs to implement new
                endpoints and functionalities
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
