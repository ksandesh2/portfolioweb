import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="karkisandesh222@gmail.com">Send an email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sandesh-karki-722435197/">Find me on LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ksandesh2">Github Account</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("skills/facebook.png")} alt="Facebook icon" />
          <a href="https://www.facebook.com/profile.php?id=100025445589799">Connect on facebook</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("skills/researchgate.png")} alt="Researchgate icon" />
          <a href="https://www.researchgate.net/profile/Sandesh-Karki?ev=hdr_xprf&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImxvZ2luIiwicGFnZSI6InB1YmxpY2F0aW9uIiwicHJldmlvdXNQYWdlIjoicHJvZmlsZSIsInBvc2l0aW9uIjoiZ2xvYmFsSGVhZGVyIn19">View on Researchgate</a>
        </li>
      </ul>
    </footer>
  );
};
