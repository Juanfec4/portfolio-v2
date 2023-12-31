import { FC, ReactNode } from "react";

interface BackdropContainerProps {
  children: ReactNode;
}

const BackdropContainer: FC<BackdropContainerProps> = ({ children }) => {
  return (
    <div className="relative z-10">
      <div className="bg-stone-900 p-6 border border-white-mimosa/50 rounded-md hover:translate-x-2 hover:translate-y-2 transition duration-200 group">
        {children}
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-10 bg-orange-400 translate-x-2 translate-y-2 rounded-md"></div>
    </div>
  );
};
export default BackdropContainer;
