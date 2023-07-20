import Head from "next/head";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import sinshiPic from "../public/sinshi.jpg";
import Link from "next/link";
import SkillsSection from "../components/HomePage/SkillsSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sinshi | Coding and Design</title>
        <meta name="description" content="Sinshi | Coding and Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center min-h-screen text-center p-5">
        <div>
          <Image
            src={sinshiPic}
            alt="Picture of Sinshi"
            className="aspect-square object-cover object-top rounded-full m-auto"
            width={180}
            height={180}
          />
          <h1 className="text-5xl font-bold mt-8">
            Hello, This is Ahmed Hafez
          </h1>
          <h2 className="text-4xl font-bold mb-6">Senior Frontend Developer</h2>

          <p className="max-w-[45ch] text-xl">
            Self-taught with 4 years of experience, based in Egypt Cairo, with a
            passion for building pretty responsive UIs with css, and writing
            clean performant code covered with tests
          </p>

          <a
            className="inline-flex items-center mt-8 text-xl py-3 px-14 bg-white text-black rounded"
            href="mailto:yorfnd@gmail.com"
          >
            <FaEnvelope className="mr-2" /> Let&apos;s Talk
          </a>
          <Link
            href="/resume"
            className="block w-fit py-2 px-4 border m-auto rounded mt-5"
          >
            Resume
          </Link>

          <div className="flex gap-2 justify-center items-center  mt-12 text-3xl">
            <Link href="https://www.linkedin.com/in/sinshi-smith/">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/SinshiSmith">
              <FaGithub />
            </Link>
          </div>
        </div>
      </main>
      <SkillsSection />
    </div>
  );
}
