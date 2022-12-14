import Link from "next/link";
import { FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";

import styles from "../styles/Resume.module.css";
import Head from "next/head";

export default function Resume() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Ahmed Hafez | Resume</title>
        <meta name="description" content="Ahmed Hafez | Resume" />
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h1>Ahmed Hafez</h1>
            <h3>Senior Frontend Developer</h3>
          </div>
          <div>
            <CompactContactLine href="/" name="sinshi.dev" icon={<TbWorld />} />
            <CompactContactLine
              href="/"
              name="Giza, Egypt"
              icon={<MdLocationPin />}
            />
            <CompactContactLine
              href="tel:+201110763080"
              name="+201110763080"
              icon={<FaWhatsapp />}
            />
            <CompactContactLine
              href="mailto:yorfnd@gmail.com"
              name="yorfnd@gmail.com"
              icon={<FaEnvelope />}
            />
            <CompactContactLine
              href="https://github.com/SinshiSmith"
              name="github.com/SinshiSmith"
              icon={<FaGithub />}
            />
          </div>
        </div>

        <section>
          <h2>Experience:</h2>
          <Experience
            company="Pocketful of Quarters, Inc"
            date="2020-Current"
            items={[
              `Leading a team of 5+ developers for migration into a new
                database scheme covered with Integration and e2e tests`,
              `Working closely with CEO and users to Revamp the website UX/Ul design`,
              `Creating mock kit to make unit and integration tests easier and faster`,

              `Designing a transactions page for the blockchain currency
                  Quarters`,
            ]}
          />
          <Experience
            company="Tatsu Works Pte Ltd"
            date="2019-2020"
            items={[
              `Creating a scalable and reliable code base from scratch using tech stack that work best for the website`,
              `Implementing real-time Discord embedded message
                preview`,
              `Implementing an in-app store for digital goods with search, categories and filtering`,
              `Implementing discord bot management dashboard`,
            ]}
          />
        </section>

        <section className={styles.experience}>
          <h2>Education</h2>
          <div className={styles.position}>
            <h3>Helwan University</h3>
            <p>2015-2019</p>
          </div>
          <p>Bachelor of Commerce, Applied Statistics</p>
        </section>

        <section>
          <h2>Skills:</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React: Next.js, Gatsby</li>
            <li>CSS-IN-JS: emotion.js, styled-components</li>
            <li>Restful APIs: Axios</li>
            <li>Graphql: Relay.js, Apollo</li>
            <li>E2E tests: Cypress, Playwright</li>
            <li>Unit/Integration tests: react-testing-library</li>
            <li>Git: github, CI/CD, code reviews</li>
          </ul>
        </section>
        <section>
          <h2>languages:</h2>
          <ul>
            <li>Arabic: Native</li>
            <li>English: Fluent</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function CompactContactLine({ name, href, icon }) {
  return (
    <div className={styles.compactContactLine}>
      {icon}
      <Link href={href}>{name}</Link>
    </div>
  );
}

function Experience({ company, date, items }) {
  return (
    <div className={styles.experience}>
      <div className={styles.position}>
        <h3>{company}</h3>
        <p>{date}</p>
      </div>
      {items && (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
