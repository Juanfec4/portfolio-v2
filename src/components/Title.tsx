import { Paytone_One } from "next/font/google";
import { FC } from "react";
const paytoneOne = Paytone_One({ subsets: ["latin"], weight: "400" });

//Title props
interface TitleProps {
  text: string;
}
const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1
      className={
        " text-4xl md:text-6xl text-white-mimosa py-6 text-center" +
        " " +
        paytoneOne.className
      }
    >
      {text}
    </h1>
  );
};
export default Title;
