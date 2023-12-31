import { FC, ReactNode } from "react";
//KeyText props
interface KeyTextProps {
  children: ReactNode;
}
const KeyText: FC<KeyTextProps> = ({ children }) => {
  //Check if children is string
  if (typeof children !== "string") return undefined;

  return <strong className=" font-bold text-white-mimosa">{children}</strong>;
};

export default KeyText;
