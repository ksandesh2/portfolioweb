import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* <a className={styles.title} href="/">
        Portfolio
      </a> */}
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className={styles.personalInfo}>
        <span className={styles.name}>Sandesh Karki</span>
        <span className={styles.qualification}>B.E. in Civil Engineering</span>
      </div>
          <li>
            <a href="#about">Research Interest</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#Donate">Blog</a>
          </li>
          <li>
            <a href="#Blogs">Donate</a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};
