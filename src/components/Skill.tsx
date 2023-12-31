import Image from "next/image";
import { FC } from "react";
interface SkillProps {
  text: string;
  imgFile?: string;
  invert?: boolean;
}
const Skill: FC<SkillProps> = ({ text, imgFile, invert }) => {
  return (
    <div className=" flex flex-col gap-2 items-center w-20">
      {imgFile && (
        <Image
          src={"/logos/" + imgFile}
          width={50}
          height={50}
          alt=""
          style={invert ? { filter: "invert(1)" } : {}}
          className="w-10 h-10 rounded-md"
        />
      )}
      <p className="text-sm text-center">{text}</p>
    </div>
  );
};
export default Skill;
