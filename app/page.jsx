// pages/index.js
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Portfolio de [Ton Nom]" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.containerText}>
              <h1>
                <span className={styles.hello}>HELLO </span>
                <span className={styles.nameContainer}>
                  MY NAME IS <span className={styles.name}>YUSEF BOULAM</span>
                </span>
              </h1>
              <h2>
                <span className={styles.function}>Developpeur Web </span> based
                in Nice
              </h2>

              <Link href="/contact" className={styles.linkContainer}>
                <button className={styles.link}>Let's talk with me !</button>
              </Link>
            </div>
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
                <a
                  href="mailto:yusef.boulam@gmail.com"
                  className={styles.email}
                >
                  yusef.boulam@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerPicture}>
          <img
            src="/assets/images/home/email.svg"
            alt="photo profile"
            className={styles.pictureProfile}
          />
        </div>
        <div className={styles.containerSocial}>
          <Link href="https://www.linkedin.com/in/yusef-boulam/">
            <img
              src="/assets/images/home/linkedin.svg"
              alt="linkedin"
              className={styles.iconeLinkedin}
            />
          </Link>
          <Link href="https://github.com/yusef-boulam">
            <img
              src="/assets/images/home/github.svg"
              alt="github"
              className={styles.iconeGithub}
            />
          </Link>
          <div className={styles.ligneGrise}></div>
        </div>
      </main>
    </div>
  );
}
