import Image from "next/image";
import Link from "next/link";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import SkillsSection from "../components/HomePage/SkillsSection";

import sinshiPic from "../public/sinshi.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sinshi | Coding and Design",
  description: "Sinshi | Coding and Design",
};

export default async function Page() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center p-5 text-center">
        <div>
          <Image
            src={sinshiPic}
            alt="Picture of Sinshi"
            className="m-auto aspect-square rounded-full object-cover object-top"
            width={180}
            height={180}
          />
          <h1 className="mt-8 text-5xl font-bold">
            Hello, This is Ahmed Hafez
          </h1>
          <h2 className="mb-6 text-4xl font-bold">Senior Frontend Developer</h2>

          <p className="max-w-[45ch] text-xl">
            Self-taught with 4 years of experience, based in Egypt Cairo, with a
            passion for building pretty responsive UIs with css, and writing
            clean performant code covered with tests
          </p>

          <a
            className="mt-8 inline-flex items-center rounded bg-white px-14 py-3 text-xl text-black"
            href="mailto:yorfnd@gmail.com"
          >
            <FaEnvelope className="mr-2" /> Let&apos;s Talk
          </a>
          <Link
            href="/resume"
            className="m-auto mt-5 block w-fit rounded border px-4 py-2"
          >
            Resume
          </Link>

          <div className="mt-12 flex items-center justify-center gap-2 text-3xl">
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
    </>
  );
}
