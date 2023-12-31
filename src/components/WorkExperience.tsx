"use client";

import { FC, useEffect, useState } from "react";
import Line from "./Line";
import Title from "./Title";
import WorkElement from "./WorkElement";

const WorkExperience: FC = () => {
  //Work options
  const options = ["Crypto Coins", "ESAR"];

  const [selected, setSelected] = useState("Crypto Coins");

  useEffect(() => {
    setSelected(options[0]);
  }, []);

  return (
    <section
      className="px-6 sm:px-16 rounded-md bg-stone-950 pt-16"
      id="experience"
    >
      <Line />
      <Title text="WORK EXPERIENCE" />
      <div className="grid grid-cols-12 h-96 gap-6 md:gap-16 px-6">
        <ul className="col-start-1 col-end-13 md:col-end-5 space-y-2 md:space-y-6">
          {options.map((option, index) => {
            return selected === option ? (
              <li
                key={index}
                className="cursor-pointer text-orange-400 transition duration-200 border-l-orange-400 border-l-2 pl-2"
                onClick={() => setSelected(option)}
              >
                {option}
              </li>
            ) : (
              <li
                key={index}
                className="cursor-pointer text-white-mimosa/50 hover:text-orange-400 transition duration-200"
                onClick={() => setSelected(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>
        <div className="col-start-1 col-end-13 md:col-start-5 md:max-w-md w-full overflow-y-scroll">
          {selected === options[0] && (
            <WorkElement
              title="Software Engineer Research Assistant"
              company={options[0]}
              duration="Oct 2023 - Present"
              bullets={[
                "Built a REST API that served real-time financial market simulation data to React clients.",
                "Improved experimental data integrity and collection by migrating to PostgreSQL, and re-designing database schemas.",
                "Increased application security, and reliability by implementing user authentication flows using JWT, and two factor authentication using Node.js mailing libraries.",
              ]}
            />
          )}
          {selected === options[1] && (
            <WorkElement
              title="Desktop Application Developer"
              company={options[1]}
              duration="Jul 2020 - Oct 2021"
              bullets={[
                "Upgraded existing ERP systems for hospitals by building React Single Page Applications providing doctors with better access to medical records.",
                "Improved service accessibility through the migration of web hosted learning platforms into application contexts utilizing Redux and Electron.",
                "Integrated existing web services and data clouds with an in-house REST API built using Express and Knex.js.",
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default WorkExperience;
