import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import sinshiPic from "../public/sinshi.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sinshi | Coding and Design</title>
        <meta name="description" content="Sinshi | Coding and Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image
            src={sinshiPic}
            alt="Picture of Sinshi"
            className={styles.profilePic}
            objectFit="cover"
            width={180}
            height={180}
          />
          <h1>Hello, This is Ahmed Hafez</h1>
          <h2>Senior Frontend Developer</h2>

          <p>
            Self-taught with 4 years of experience, based in Egypt Cairo, with a
            passion for building pretty responsive UIs with css, and writing
            clean performant code covered with tests
          </p>

          <a className={styles.callToAction} href="mailto:yorfnd@gmail.com">
            <FaEnvelope /> Let&apos;s Talk
          </a>
          <Link href="/resume">
            <a className={styles.resumeButton}>Resume</a>
          </Link>

          <div className={styles.socialLinks}>
            <Link href="https://www.linkedin.com/in/sinshi-smith/">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/SinshiSmith">
              <FaGithub />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
