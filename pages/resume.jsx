import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Me from "../public/assets/me.jpeg";

const resume = () => {
  return (
    <>
      <Head>
        <title>Amin | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Mohammad Amin Mansury</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/m-amin-mansuri"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/aminmansuri1377"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <Image
            src={Me}
            alt="me"
            height={200}
            width={200}
            className=" rounded-full"
          />
          <div className="hidden sm:block">
            <p>
              Creative <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Creative</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration. Consummate
          professional, and motivated leader, with solid interpersonal abilities
          and complex problem-solving skills. Effective and proven track record
          of critical thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        {/* <div className="text-center py-4">
        <h5 className="text-center underline text-[18px] py-2">Skills</h5>
        <p className="py-2">
          <span className="font-bold">Technical Skills</span>
          <span className="px-2">|</span>Front-End Web Developer
          <span className="px-2">|</span> HTML
          <span className="px-2">|</span>CSS
          <span className="px-2">|</span>Javascript
          <span className="px-2">|</span>React
          <span className="px-2">|</span>Next JS
          <span className="px-2">|</span>SQL
          <span className="px-2">|</span>NoSQL
          <span className="px-2">|</span>Redux
          <span className="px-2">|</span>Tailwind
          <span className="px-2">|</span> Firebase
          <span className="px-2">|</span> RESTAPI
        </p>
        <p className="py-2">
          <span className="font-bold">Amazon Web Services</span>
          <span className="px-2">|</span>Amazon Web Services Cloud
          Practitioner
        </p>
      </div> */}

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Batriders</span>
          </p>
          <p className="py-1 italic">Front End Web Developer (2022 - 2024)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Wep App development by using Next.js and react technologies .
            </li>
            <li>debug , testing and deploying front-end codes.</li>
            <li></li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Novin rayan gostar alborz</span>
          </p>
          <p className="py-1 italic">front-end developer</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>In 2021 for nine month as junior and intern developer.</li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              Bachelor of industrial engineering: Karaj Azad University{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
