"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/nav.module.css";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          <p>Home</p>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.container_NavDesktop_Profile}>
          <div className={styles.navDesktop}>
            <div className={styles.containerNavLink}>
              <div className={styles.navLinkContainer}>
                <Link href="/about" className={styles.navLink}>
                  About
                </Link>
                <Link href="/projects" className={styles.navLink}>
                  Projects
                </Link>
              </div>
              <div className={styles.navLinkContainer}>
                <Link href="/contact" className={styles.navLink}>
                  Contact
                </Link>
                <Link href="/resume" className={styles.navLink}>
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={styles.navMobile}>
          <button
            onClick={() => setToggleDropdown((prev) => !prev)}
            className={styles.mobileMenuButton}
          >
            Menu
          </button>
          {toggleDropdown && (
            <div className={styles.dropdown}>
              <Link href="/about" onClick={() => setToggleDropdown(false)}>
                About
              </Link>
              <Link href="/recipe" onClick={() => setToggleDropdown(false)}>
                Projects
              </Link>
              <Link
                href="/shopping-list"
                onClick={() => setToggleDropdown(false)}
              >
                Contact
              </Link>
              <Link
                href="/create-recipe"
                onClick={() => setToggleDropdown(false)}
              >
                Resume
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
