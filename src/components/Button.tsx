import { Icon as TablerIcon } from "@tabler/icons-react";
import { FC } from "react";

//Button types
export enum ButtonType {
  Primary,
  Secondary,
  Inverted,
  Accent,
  Action,
  ActionInverted,
}

//Button props
interface ButtonProps {
  type: ButtonType;
  text?: string;
  clickFn?: () => void;
  link?: string;
  Icon?: TablerIcon;
  as?: "button" | "a";
}

const Button: FC<ButtonProps> = ({
  type,
  text,
  clickFn,
  link,
  Icon,
  as: Component = "button",
}) => {
  //Primary button
  if (type === ButtonType.Primary)
    return (
      <Component
        onClick={clickFn}
        href={link}
        target="_blank"
        className=" bg-transparent text-orange-400 rounded-md w-32 h-12 border-2 italic tracking-wider text-md border-orange-400 transition duration-200 hover:border-white-mimosa
        hover:text-white-mimosa flex items-center justify-center cursor-pointer"
      >
        {text}
      </Component>
    );

  //Primary button
  if (type === ButtonType.Secondary)
    return (
      <Component
        onClick={clickFn}
        href={link}
        target="_blank"
        className=" bg-white-mimosa text-stone-900 rounded-md w-32 h-12 italic tracking-wider text-md hover:bg-orange-400 hover:text-white-mimosa transition duration-200 flex items-center justify-center cursor-pointer"
      >
        {text}
      </Component>
    );

  //Accent button
  if (type === ButtonType.Accent)
    return (
      <Component
        onClick={clickFn}
        href={link}
        target="_blank"
        className=" bg-transparent text-white-mimosa rounded-md w-32 h-12 border-2 italic tracking-wider text-md border-white-mimosa transition duration-200 hover:border-orange-400
        hover:text-orange-400 flex items-center justify-center cursor-pointer"
      >
        {text}
      </Component>
    );
  //Inverted button
  if (type === ButtonType.Inverted)
    return (
      <Component
        onClick={clickFn}
        href={link}
        target="_blank"
        className=" bg-transparent text-stone-900 rounded-md w-32 h-12 border-2 italic tracking-wider text-md border-stone-900 transition duration-200
      hover:bg-orange-400 hover:border-orange-400 hover:text-white-mimosa flex items-center justify-center cursor-pointer"
      >
        {text}
      </Component>
    );
  //Action button
  if (type === ButtonType.Action)
    return (
      <a
        href={link}
        role="button"
        target="_blank"
        className="w-12 h-12 bg-orange-400 flex rounded-md items-center justify-center hover:text-stone-900 hover:bg-white-mimosa transition duration-200"
      >
        {Icon && <Icon className="h-6 w-6" />}
      </a>
    );
  //Action button
  if (type === ButtonType.ActionInverted)
    return (
      <a
        href={link}
        role="button"
        target="_blank"
        className="w-12 h-12 bg-stone-900 flex rounded-md items-center justify-center hover:text-white-mimosa hover:bg-orange-400 transition duration-200"
      >
        {Icon && <Icon className="h-6 w-6" />}
      </a>
    );
};
export default Button;
