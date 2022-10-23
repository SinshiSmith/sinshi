import styles from "./SkillsSection.module.css";
import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGraphql,
  SiRust,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const iconWidth = "3em";

const skills = [
  { name: "HTML", icon: <SiHtml5 size={iconWidth} /> },
  { name: "CSS", icon: <SiCss3 size={iconWidth} /> },
  { name: "JavaScript", icon: <SiJavascript size={iconWidth} /> },
  { name: "React", icon: <SiReact size={iconWidth} /> },
  { name: "Next.js", icon: <SiNextdotjs size={iconWidth} /> },
  { name: "GraphQL", icon: <SiGraphql size={iconWidth} /> },
  { name: "Node.js", icon: <SiNodedotjs size={iconWidth} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={iconWidth} /> },
  { name: "Rust", icon: <SiRust size={iconWidth} /> },
];

export default function SkillsSection() {
  return (
    <section className={styles.section}>
      <div>
        <h2>Skills and technologies</h2>
        <ul className={styles.grid}>
          {skills.map(({ name, icon }) => (
            <Skill key={name} name={name} icon={icon} />
          ))}
        </ul>
      </div>
    </section>
  );
}

const Skill = ({ name, icon }) => {
  return (
    <div className={styles.skillBox}>
      <div>
        {icon}
        <p>{name}</p>
      </div>
    </div>
  );
};
