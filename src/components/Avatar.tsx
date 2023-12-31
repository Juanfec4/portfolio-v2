import Image from "next/image";
import { FC } from "react";
const Avatar: FC = () => {
  return (
    <div className="min-w-max">
      <div className=" relative max-w-max max-h-max">
        <div className="rounded-md bg-white-mimosa overflow-hidden max-h-max max-w-max hover:translate-x-1 hover:translate-y-1 transition duration-200">
          <Image
            src="/images/me.png"
            width={900}
            height={900}
            alt="Profile picture"
            className="w-52"
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-orange-400 -z-10  rounded-md 
    translate-x-1 translate-y-1"
        ></div>
      </div>
    </div>
  );
};
export default Avatar;
