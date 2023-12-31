import { FC } from "react";
import Avatar from "./Avatar";
import Button, { ButtonType } from "./Button";
import KeyText from "./KeyText";
import Paragraph, { ParagraphType } from "./Paragraph";
import Title from "./Title";

const Hero: FC = () => {
  return (
    <section className="p-6 sm:px-16 py-6" id="about">
      <Title text="Hello, I'm Juan!" />
      <div className="flex flex-col md:flex-row-reverse md:gap-16 items-center md:items-start pt-12">
        <Avatar />
        <div className="mt-12 md:mt-0">
          <Paragraph indent={true} type={ParagraphType.Accent}>
            A Results-driven Software Engineer with expertise in developing
            flexible client-facing applications and APIs using{" "}
            <KeyText>TypeScript (ES6+)</KeyText>, <KeyText>Node.js</KeyText>,{" "}
            <KeyText>Express</KeyText> and <KeyText>React</KeyText>. I have a
            proven track record of enhancing system performance, data integrity,
            and security across diverse projects.
          </Paragraph>
          <Paragraph type={ParagraphType.Accent}>
            I have had the opportunity to collaborate in development projects
            for non-profit organizations across Latin America. Through these
            experiences, coupled with several freelance and personal projects, I
            gained crucial technical, and collaboration skills.
          </Paragraph>
          <Paragraph type={ParagraphType.Accent}>
            I consider myself a <KeyText>life-long learner</KeyText>, always
            looking for new opportunities.
          </Paragraph>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button
              type={ButtonType.Primary}
              text="Linkedin"
              as="a"
              link="https://www.linkedin.com/in/juan-f-cardenas/"
            />
            <Button
              type={ButtonType.Secondary}
              text="Resume"
              as="a"
              link={process.env.NEXT_PUBLIC_SITE_URL + "/files/resume.pdf"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
