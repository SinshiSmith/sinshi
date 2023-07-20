import Link from "next/link";
import { FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";

import Head from "next/head";
import Skills from "../components/Resume/Skills";

export default function Resume() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Head>
        <title>Ahmed Hafez | Resume</title>
        <meta name="description" content="Ahmed Hafez | Resume" />
      </Head>
      <div className="p-6 max-w-[800px] bg-gray-100 text-black rounded">
        <div className="flex justify-between mb-10 flex-wrap">
          <div>
            <h1 className="text-6xl font-bold">Ahmed Hafez</h1>
            <h2 className="text-3xl font-bold">Senior Frontend Developer</h2>
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
          <h2 className="text-2xl text-center font-bold mb-5">
            Professional Experience
          </h2>
          <hr className="my-2 border-black" />
          <Experience
            title="Full-Stack Developer"
            company="2B Creative"
            date="Jan 2023 - Current"
            items={[
              `Developed and maintained 3 React.js websites with i18n support`,
              `Integrated Storyblok CMS with React website to allow building web pages with visual editor`,
              `Improved Typescript developer experience with Storyblok`,
              `Added support for live chat & reCaptcha protection on forms`,
            ]}
          />
          <Experience
            title="Lead Frontend Developer"
            company="Pocketful of Quarters, Inc"
            date="Jan 2021 - Sep 2022"
            items={[
              `Lead a team of 4 junior developers to migrate to a new
                database scheme with Integration/E2E tests`,
              `Reviewed Junior Developers PRs and Guided them to best practices for JavaScript, React, and CSS`,
              `Collaborated with senior developers and product manager to create efficient and effective workflow using agile methodology Kanban`,
              `Developed mock-kit of Restful APIs for unit and integration tests`,
              `Designed and Developed a transactions page for the blockchain currency Quarters`,
            ]}
          />
          <Experience
            title="Frontend Developer"
            company="Pocketful of Quarters, Inc"
            date="May 2020 - Jan 2021"
            items={[
              `Refactored legacy code to modern React 16.8+`,
              `Migrated from create-react-app to Next.js with SSR`,
              `Developed landing page, onboarding user experience for new users`,
              `Developed responsive, dynamic and interactive Dashboard to creating new events`,
              `Added Internationalization based on user preference with fallback to user current location`,
              `Added real-time data updates to time sensitive pages using Firebase snapshots`,
              `Tested most critical features with E2E tests using PlayWright`,
            ]}
          />
          <Experience
            title="UX/UI Designer"
            company="Pocketful of Quarters, Inc"
            date="May 2020 - Sep 2021"
            items={[
              `Redesigned UI for existing components`,
              `Gathered user feedback to improve current designed`,
              `Gathered business and user feature requests and defined requirements and needs`,
              `Improved website design for Mobile devices`,
              `Proposed and owned multiple new features on the website`,
            ]}
          />
          <Experience
            title="Frontend Developer"
            company="Tatsu Works Pte Ltd"
            date="Jun 2019 - May 2020"
            items={[
              `Created a scalable and reliable code base from scratch using tech stack that work best for the website`,
              `Developed real-time Discord embedded message preview`,
              `Developed an in-app store for digital goods with search, categories and filtering`,
              `Developed discord bot management dashboard`,
            ]}
          />

          <Experience
            title="Frontend Developer Intern"
            company="Midrule"
            date="Jun 2018 - Jul 2018"
            items={[
              `Designed wireframes of UX/UI for company website`,
              `Developed Company Website using HTML, CSS, Javascript, Bootstrap`,
            ]}
          />
        </section>

        <section className="mb-5">
          <h2 className="text-2xl text-center font-bold mb-5">
            Technical Skills
          </h2>
          <hr className="my-2 border-black" />
          <Skills />
        </section>
        <section className="mb-5">
          <h2 className="text-2xl text-center font-bold mb-5">Languages</h2>
          <hr className="my-2 border-black" />
          <ul className="list-disc list-inside">
            <li>Arabic: Native</li>
            <li>English: Fluent</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl text-center font-bold mb-5">Education</h2>
          <hr className="my-2 border-black" />
          <div className="flex justify-between flex-wrap">
            <h3 className="text-lg font-bold">Helwan University</h3>
            <p>2015 - 2019</p>
          </div>
          <p className="my-4">
            Bachelor of Commerce and Business Administration, Applied Statistics
          </p>
        </section>
      </div>
    </div>
  );
}

function CompactContactLine({ name, href, icon }) {
  return (
    <div className="flex items-center">
      {icon}
      <Link href={href} className="ml-1 underline">
        {name}
      </Link>
    </div>
  );
}

function Experience({ company, date, items, title }) {
  return (
    <div className="mb-10">
      <div className="flex justify-between flex-wrap">
        <div>
          <h3 className="text-lg font-bold leading-none">{title}</h3>
          <p>{company}</p>
        </div>
        <p>{date}</p>
      </div>
      {items && (
        <ul className="list-disc list-outside mb-5 mt-3 pl-5">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
