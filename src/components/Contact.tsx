import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Paytone_One } from "next/font/google";
import { FC } from "react";
import Button, { ButtonType } from "./Button";
import Paragraph, { ParagraphType } from "./Paragraph";
const paytoneOne = Paytone_One({ subsets: ["latin"], weight: "400" });
const Contact: FC = () => {
  return (
    <section id="contact" className="p-16 my-16">
      <div className="w-full bg-white-mimosa rounded-md p-6">
        <h2
          className={
            "text-stone-900 text-3xl text-center" + " " + paytoneOne.className
          }
        >
          CONTACT
        </h2>
        <Paragraph type={ParagraphType.Accent}>
          Feel free to reach out to me if you want to collaborate on a project
          together, have a question, or simply want to connect.
        </Paragraph>
        <div className="flex gap-2">
          <Button
            as="a"
            link={"mailto:juanfelipecardenas4@gmail.com"}
            type={ButtonType.ActionInverted}
            Icon={IconMail}
          />
          <Button
            as="a"
            link={"https://www.linkedin.com/in/juan-f-cardenas/"}
            type={ButtonType.ActionInverted}
            Icon={IconBrandLinkedin}
          />
          <Button
            as="a"
            link={"https://github.com/Juanfec4"}
            type={ButtonType.ActionInverted}
            Icon={IconBrandGithub}
          />
          <Button
            as="a"
            text="Resume"
            link={"./files/resume.pdf"}
            type={ButtonType.Inverted}
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
