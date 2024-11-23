import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/shoplonland.jpg";
import cryptoImg from "../public/assets/projects/mag.jpg";
import netflixImg from "../public/assets/projects/planet.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="shoplon"
            backgroundImg={propertyImg}
            projectUrl="/shoplon"
            tech="Next JS"
          />
          <ProjectItem
            title="magreach dashboard"
            backgroundImg={cryptoImg}
            projectUrl="/magreach"
            tech="next JS"
          />
          <ProjectItem
            title="gamePlanet"
            backgroundImg={netflixImg}
            projectUrl="/gamePlanet"
            tech="Next JS"
          />
          {/* <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
