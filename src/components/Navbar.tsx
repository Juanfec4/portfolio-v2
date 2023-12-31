"use client";
import useScrollToPosition from "@/hooks/useScrollToPosition";
import { FC } from "react";

type Link = {
  id: string;
  text: string;
};
interface NavbarProps {
  links: Link[];
}
const Navbar: FC<NavbarProps> = ({ links }) => {
  const { scrollToPosition } = useScrollToPosition();

  const handleScroll = (id: string) => {
    scrollToPosition({ targetId: id, offset: 30, behavior: "smooth" });
  };
  console.log(
    `%c
     ██╗██╗   ██╗ █████╗ ███╗   ██╗                               
     ██║██║   ██║██╔══██╗████╗  ██║                               
     ██║██║   ██║███████║██╔██╗ ██║                               
██   ██║██║   ██║██╔══██║██║╚██╗██║                               
╚█████╔╝╚██████╔╝██║  ██║██║ ╚████║                               
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝                               
                                                             
 ██████╗ █████╗ ██████╗ ██████╗ ███████╗███╗   ██╗ █████╗ ███████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝
██║     ███████║██████╔╝██║  ██║█████╗  ██╔██╗ ██║███████║███████╗
██║     ██╔══██║██╔══██╗██║  ██║██╔══╝  ██║╚██╗██║██╔══██║╚════██║
╚██████╗██║  ██║██║  ██║██████╔╝███████╗██║ ╚████║██║  ██║███████║
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

  %cPortfolio
  
  %cBuilt with Next.js, React, TypeScript, and Tailwind
  `,
    "color: #fb923c; font-family: monospace",
    "font-weight: bold; font-size: 18px; color: #fb923c",
    "font-size: 14px; color: #fb923c"
  );

  return (
    <nav className="bg-stone-950 p-6 sticky top-0 z-50 border-b hidden md:block transition duration-200">
      <ul className="flex gap-6 items-center justify-center">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer hover:text-orange-400"
              onClick={() => handleScroll(link.id)}
            >
              <a>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
