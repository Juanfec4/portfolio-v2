import { Paytone_One } from "next/font/google";
import { FC } from "react";
const paytoneOne = Paytone_One({ subsets: ["latin"], weight: "400" });

//Title props
interface ProjectTitleProps {
  text: string;
}
const ProjectTitle: FC<ProjectTitleProps> = ({ text }) => {
  return (
    <h3
      className={
        " text-2xl md:text-3xl text-white-mimosa pt-4 text-center md:text-start" +
        " " +
        paytoneOne.className
      }
    >
      {text}
    </h3>
  );
};
export default ProjectTitle;
