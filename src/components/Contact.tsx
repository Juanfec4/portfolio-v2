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
    <section id="contact" className="md:px-16 py-16 my-24">
      <div className="relative z-10">
        <div className="w-full bg-white-mimosa md:rounded-md p-6 hover:translate-x-2 hover:translate-y-2 transition duration-200">
          <h2
            className={
              "text-stone-900 text-3xl text-center" + " " + paytoneOne.className
            }
          >
            CONTACT
          </h2>
          <Paragraph type={ParagraphType.Black}>
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
        <div className="absolute inset-0 rounded-md hidden md:block bg-orange-400 -z-10 translate-x-2 translate-y-2"></div>
      </div>
    </section>
  );
};
export default Contact;
