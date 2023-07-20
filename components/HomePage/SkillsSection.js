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
  { name: "HTML", icon: <SiHtml5 className="m-auto" size={iconWidth} /> },
  { name: "CSS", icon: <SiCss3 className="m-auto" size={iconWidth} /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="m-auto" size={iconWidth} />,
  },
  { name: "React", icon: <SiReact className="m-auto" size={iconWidth} /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="m-auto" size={iconWidth} />,
  },
  { name: "GraphQL", icon: <SiGraphql className="m-auto" size={iconWidth} /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="m-auto" size={iconWidth} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="m-auto" size={iconWidth} />,
  },
  { name: "Rust", icon: <SiRust className="m-auto" size={iconWidth} /> },
];

export default function SkillsSection() {
  return (
    <section className="text-center min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-2xl font-bold my-5">Skills And Technologies</h2>
        <ul className="grid gap-8 grid-cols-2 p-5 w-screen max-w-md md:grid-cols-3 md:p-0">
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
    <div className="h-32 rounded bg-zinc-800 flex items-center justify-center">
      <div>
        {icon}
        <p className="mt-2">{name}</p>
      </div>
    </div>
  );
};
