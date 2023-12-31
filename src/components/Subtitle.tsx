import { Paytone_One } from "next/font/google";
import { FC } from "react";
const paytoneOne = Paytone_One({ subsets: ["latin"], weight: "400" });

interface SubtitleProps {
  text: string;
}

const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return (
    <h3
      className={
        " text-xl md:text-2xl text-white-mimosa pt-4" +
        " " +
        paytoneOne.className
      }
    >
      {text}
    </h3>
  );
};

export default Subtitle;
