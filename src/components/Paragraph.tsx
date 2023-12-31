import { FC, ReactNode } from "react";

export enum ParagraphType {
  Regular,
  Accent,
}

//Paragraph props
interface ParagraphProps {
  children?: ReactNode;
  indent?: boolean;
  type?: ParagraphType;
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  indent,
  type = ParagraphType.Regular,
}) => {
  //If indented paragraph
  if (type === ParagraphType.Accent) {
    if (indent)
      return (
        <p
          className={
            "max-w-[50ch] md:max-w-[60ch] text-stone-500 md:text-lg mb-4 indent-8"
          }
        >
          {children}
        </p>
      );
    return (
      <p
        className={
          "max-w-[50ch] md:max-w-[60ch] text-stone-500 md:text-lg my-4"
        }
      >
        {children}
      </p>
    );
  } else {
    if (indent)
      return (
        <p
          className={
            "max-w-[50ch] md:max-w-[60ch] text-white-mimosa md:text-lg mb-4 indent-8 text-wrap"
          }
        >
          {children}
        </p>
      );
    return (
      <p
        className={
          "max-w-[50ch] md:max-w-[60ch] text-white-mimosa md:text-lg my-4"
        }
      >
        {children}
      </p>
    );
  }
};
export default Paragraph;
