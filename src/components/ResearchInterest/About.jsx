import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Research Interest</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/roadsafety.png")} alt="Road safety icon" />
            <div className={styles.aboutItemText}>
              <h3>Road safety</h3>
              <p>
                I'm passionate about using machine learning and big data to analyze traffic data and identify patterns in road accidents. By developing predictive models, I aim to improve traffic management and reduce accidents.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/disaster.png")} alt="Disaster icon" />
            <div className={styles.aboutItemText}>
              <h3>Disaster Management</h3>
              <p>
                I see great potential in using machine learning and big data to enhance early warning systems and emergency response strategies. Through data analysis, I aim to predict disaster events and enable proactive measures to protect communities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/wastewater.png")} alt="Wastewater" />
            <div className={styles.aboutItemText}>
              <h3>Waste Water Management</h3>
              <p>
                In wastewater management, I focus on implementing data-driven solutions to optimize treatment processes and ensure environmental sustainability. By analyzing wastewater data, I develop predictive models to guide decision-making for effective water resource management.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
