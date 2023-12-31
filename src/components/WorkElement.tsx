import { FC } from "react";
import Paragraph from "./Paragraph";

interface WorkElementProps {
  title: string;
  duration: string;
  bullets: string[];
  company: string;
}

const WorkElement: FC<WorkElementProps> = ({
  title,
  duration,
  bullets,
  company,
}) => {
  return (
    <div className="mx-auto md:mx-0">
      <h4 className="md:hidden font-bold text-xl">
        <span className="text-orange-400">{company}</span> | {title}
      </h4>
      <h4 className="hidden md:block font-bold text-xl">{title}</h4>
      <p className="italic opacity-50">{duration}</p>
      <ul className="list-square">
        {bullets.map((bullet, index) => {
          return (
            <li className="text-orange-400 max-w-sm md:max-w-md" key={index}>
              <Paragraph>{bullet}</Paragraph>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkElement;
