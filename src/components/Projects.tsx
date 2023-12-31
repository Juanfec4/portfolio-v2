import { FC } from "react";
import Line from "./Line";
import Project from "./Project";
import Title from "./Title";

const Projects: FC = () => {
  return (
    <section
      className="bg-stone-900 p-6 sm:px-16 py-6 rounded-md mb-24 "
      id="projects"
    >
      <Line />
      <Title text="PROJECTS" />
      <div className="my-12 flex flex-col gap-16">
        <Project
          name="GitStory"
          imgFile="git-story.png"
          repoUrl="https://github.com/Juanfec4/git-story"
          demoUrl="https://git-story-rho.vercel.app/"
          description="A React application that lets users quickly share an overview of their GitHub profile to recruiters. It allows users to share latest repos and generate a profile link."
          skills={[
            "TypeScript",
            "React",
            "React Router",
            "TanStack Query",
            "Axios",
            "TailwindCSS",
          ]}
        />
        <Project
          name="Crypto World"
          imgFile="crypto-world.png"
          repoUrl="https://github.com/Juanfec4/crypto-world"
          demoUrl="https://crypto-world-n819.vercel.app/"
          description="A Single Page Application built to help users track, manage, and view real-time crypto data. It provides features that let users filter, and add coins to their watchlist."
          skills={[
            "TypeScript",
            "React",
            "React Router",
            "TanStack Query",
            "Axios",
            "TailwindCSS",
          ]}
        />
        <Project
          name="VidStats"
          imgFile="vid-stats.png"
          repoUrl="https://github.com/Juanfec4/vid-stats"
          demoUrl="https://vid-stats.vercel.app/"
          description="A Full-stack application that utilizes Open AI's whisper language model to transcribe YouTube videos. The SPA communicates to a custom API that performs various analyses on the transcribed audio and returns a summary object."
          skills={[
            "TypeScript",
            "React",
            "Sass",
            "Zustand",
            "Node.js",
            "Express.js",
            "MongoDB",
          ]}
        />
      </div>
      <a
        href="https://github.com/Juanfec4?tab=repositories"
        target="_blank"
        className="italic text-white-mimosa/70 hover:text-white-mimosa hover:underline underline-offset-4   transition duration-200"
      >
        👉view all projects
      </a>
    </section>
  );
};
export default Projects;
