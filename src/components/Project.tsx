import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";
import BackdropContainer from "./BackdropContainer";
import Button, { ButtonType } from "./Button";
import Paragraph, { ParagraphType } from "./Paragraph";
import ProjectTitle from "./ProjectTitle";

interface ProjectProps {
  name: string;
  repoUrl?: string;
  demoUrl?: string;
  imgFile?: string;
  description: string;
  skills: string[];
}

const Project: FC<ProjectProps> = ({
  name,
  description,
  repoUrl,
  demoUrl,
  skills,
  imgFile,
}) => {
  return (
    <BackdropContainer>
      <ProjectTitle text={name} />
      <div className="flex gap-4  flex-col-reverse md:flex-row pt-6 md:pt-0 md:items-center">
        <div className="md:w-2/3">
          <Paragraph type={ParagraphType.Accent}>{description}</Paragraph>
        </div>
        {imgFile && (
          <div className="rounded-md overflow-hidden md:w-[500px] max-w-sm mx-auto">
            <div className="relative">
              <Image
                src={`/images/${imgFile}`}
                alt=""
                width={1920}
                height={1080}
                className="object-cover w-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <Button type={ButtonType.Accent} text="Demo" link={demoUrl} as="a" />
        <Button
          type={ButtonType.Action}
          Icon={IconBrandGithub}
          link={repoUrl}
        />
      </div>
      <div className="flex gap-2 flex-wrap mt-8">
        {skills.map((skill, index) => {
          return (
            <h3
              className="p-1 bg-white-mimosa/70 max-w-max rounded-md text-stone-900 text-sm group-hover:bg-white-mimosa transition duration-200"
              key={index}
            >
              {skill}
            </h3>
          );
        })}
      </div>
    </BackdropContainer>
  );
};
export default Project;
