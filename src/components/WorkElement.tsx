import { FC } from "react";
import Paragraph, { ParagraphType } from "./Paragraph";

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
    <div className="">
      <h4 className="md:hidden font-bold text-xl">
        <span className="text-orange-400">{company}</span> | {title}
      </h4>
      <h4 className="hidden md:block font-bold text-xl">{title}</h4>
      <p className="italic opacity-50">{duration}</p>
      <ul>
        {bullets.map((bullet, index) => {
          return (
            <li className="text-orange-400 flex items-center gap-2" key={index}>
              <p className="text-3xl">&#8227;</p>
              <Paragraph type={ParagraphType.Accent}>{bullet}</Paragraph>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkElement;
