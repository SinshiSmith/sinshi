import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.grid}>
      <div>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Rust</li>
      </div>
      <div>
        <li>React.js</li>
        <li>Next.js</li>
      </div>
      <div>
        <li>Restful APIs</li>
        <li>Firebase</li>
        <li>Axios</li>
      </div>
      <div>
        <li>GraphQL</li>
        <li>Relay.js</li>
        <li>Apollo</li>
      </div>
      <div>
        <li>CSS-IN-JS</li>
        <li>Emotion.js</li>
        <li>styled-components</li>
      </div>
      <div>
        <li>Git</li>
        <li>GitHub</li>
        <li>CI/CD</li>
      </div>
      <div>
        <li>E2E testing</li>
        <li>Unit/Integration Testing</li>
        <li>react-testing-library</li>
        <li>PlayWright</li>
        <li>Cypress</li>
      </div>
    </div>
  );
}
