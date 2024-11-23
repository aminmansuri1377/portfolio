import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who Am I?</h2>
          <p className="py-2 text-gray-600">
            I am Mid-level Frontend Developer skilled in creating visually
            stunning and responsive web apps using HTML, CSS, and JavaScript.
            Proficient in React, Next.js (12, 13, 14), and Material-UI, with
            expertise in Tailwind and Bootstrap for styling. Effective
            communicator with backend teams, experienced in Postman, Swagger,
            Git, GitLab, CI/CD. now i can write my codes with TypeScript and use
            Recoil as state manager in my projects
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in late 2021 managing multiple e-commerce
            apps with next.js. I have experience working directly with clients
            and taking mock wireframes all the way to deployed applications. In
            my spare time I run Code Commerce. on this year I've leaned 3js,
            prisma OPM, tRPC.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
