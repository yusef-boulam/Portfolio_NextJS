import React from "react";
import styles from "../styles/about.module.css";

function about() {
  return (
    <main className={styles.main}>
      <section className={styles.containerWelcome}>
        <p>Nice to meet you !</p>
        <h1>Welcome to my profile</h1>
        <img
          className={styles.imageProfile}
          src="/assets/images/home/email.svg"
          alt="photo profile"
        />
        <h2>
          I'm <span>Yusef Boulam</span>
        </h2>
        <h3>
          <span>Web Developer </span> based in Nice
        </h3>
      </section>
      <section className={styles.containerAccroche}>
        <div className={styles.contact}>
          <div className={styles.containercallPhone}>
            <img
              src="/assets/images/home/phone-call.svg"
              alt="phone"
              className={styles.iconeCallPhone}
            />
            <p>06 37 05 15 43</p>
          </div>
          <div className={styles.containerEmail}>
            <img
              src="/assets/images/home/email.svg"
              alt="phone"
              className={styles.iconeEmail}
            />
            <a href="mailto:yusef.boulam@gmail.com" className={styles.email}>
              yusef.boulam@gmail.com
            </a>
          </div>
        </div>
        <p>
          Développeur web diplômé et passionné, je suis à la recherche d’une
          opportunité pour évoluer professionnellement. Durant ma formation,
          j’ai développé une application web complète en ReactJS pour la partie
          front-end et une API RESTful en Node.js pour le back-end.
          Actuellement, je poursuis mon apprentissage en travaillant sur un
          projet Next.js afin d’approfondir mes compétences dans l’écosystème
          React et renforcer mon expertise en développement full-stack.
        </p>
      </section>
    </main>
  );
}

export default about;
