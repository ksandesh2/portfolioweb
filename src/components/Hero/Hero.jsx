import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

// export const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>About Me</h1>
//         <div className={styles.paragraph}>
//           <p>
//             Greetings! I'm Sandesh Karki, a dedicated Civil Engineer hailing from the picturesque landscapes of Nepal. Since childhood, I've been fascinated by the idea of shaping the world around us through infrastructure and innovation.
//           </p>
//         </div>
//         <div className={styles.paragraph}>
//           <p>
//             My journey into the realm of Civil Engineering began at Tribhuvan University, where I pursued and successfully completed my Bachelor’s degree in Civil Engineering. During my academic years, I was immersed in a world of theoretical knowledge and practical applications, laying a strong foundation for my career ahead.
//           </p>
//         </div>
//         <div className={styles.paragraph}>
//           <p>
//             What truly drives me is the opportunity to innovate and solve real-world problems. From improving traffic flow to enhancing road safety, I'm constantly seeking ways to apply the latest technologies and methodologies to create positive impacts on society.
//           </p>
//         </div>
//           <li>
//         <a href="mailto:karkisandesh222@gmail.com" className={styles.contactBtn}>
//             Contact Me
//             </a>
//           </li>
        
//         <a href="https://drive.google.com/file/d/1n5pga15gZOTwlX2c8sVmLuOD1oNpgunx/view?usp=drive_link" className={styles.contactBtn}>
//           Download CV
//         </a>
//         <li></li>
//       </div>
//       <img
//         src={getImageUrl("hero/heroImage.jpg")}
//         alt="Hero image of me"
//         className={styles.heroImg}
//       />
//     </section>
//   );
// };

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.paragraph}>
          <p>
            Greetings! I'm Sandesh Karki, a dedicated Civil Engineer hailing from the picturesque landscapes of Nepal. Since childhood, I've been fascinated by the idea of shaping the world around us through infrastructure and innovation.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p>
            My journey into the realm of Civil Engineering began at Tribhuvan University, where I pursued and successfully completed my Bachelor’s degree in Civil Engineering. During my academic years, I was immersed in a world of theoretical knowledge and practical applications, laying a strong foundation for my career ahead.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p>
            What truly drives me is the opportunity to innovate and solve real-world problems. From improving traffic flow to enhancing road safety, I'm constantly seeking ways to apply the latest technologies and methodologies to create positive impacts on society.
          </p>
        </div>
        <div className={styles.btnContainer}>
          <a href="mailto:karkisandesh222@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="https://drive.google.com/file/d/1n5pga15gZOTwlX2c8sVmLuOD1oNpgunx/view?usp=drive_link" className={styles.contactBtn}>
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
