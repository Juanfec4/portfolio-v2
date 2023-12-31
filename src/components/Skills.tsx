import { FC } from "react";
import Line from "./Line";
import Skill from "./Skill";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Skills: FC = () => {
  return (
    <section className="bg-stone-900 flex flex-col items-center" id="skills">
      <div className="max-w-4xl w-screen px-6 sm:px-16 py-6  text-white-mimosa">
        <Line />
        <Title text="SKILLS" />
        <div className="">
          <Subtitle text="Front-end" />
          <div className="flex py-6 gap-6 w-full flex-wrap">
            <Skill text="React" imgFile="react.svg" />
            <Skill text="Redux" imgFile="redux.svg" />
            <Skill text="React Query" imgFile="reactQuery.svg" />
            <Skill text="Axios" imgFile="axios.svg" />
            <Skill text="TailwindCSS" imgFile="tailwindcss.svg" />
            <Skill text="Sass" imgFile="sass.svg" />
          </div>
          <Subtitle text="Back-end" />
          <div className="flex py-6 gap-6 w-full flex-wrap">
            <Skill text="Node.js" imgFile="node.svg" />
            <Skill text="Express.js" imgFile="express.svg" invert={true} />
            <Skill text="MongoDB" imgFile="mongo.svg" />
            <Skill text="MySQL" imgFile="mysql.svg" />
            <Skill text="Knex.js" imgFile="knex.svg" />
            <Skill text="Spring" imgFile="spring.svg" />
          </div>
          <Subtitle text="Languages & Tools" />
          <div className="flex py-6 gap-6 w-full flex-wrap">
            <Skill text="JavaScript" imgFile="javascript.svg" />
            <Skill text="TypeScript" imgFile="typescript.svg" />
            <Skill text="Java" imgFile="java.svg" />
            <Skill text="Git" imgFile="git.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
