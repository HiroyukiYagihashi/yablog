import * as React from "react";
import {FC} from "react";
import Link from "next/link";

type Props = {};

export const Header: FC<Props> = (props) => {
  return (
    <header className="z-10 border-gray-200 bg-white top-0">
      <div className="flex justify-between py-4">
        <Link href="https://blog.hiroy.uk">
          <a className="text-2xl font-bold">hiroyuki blog</a>
        </Link>
        <div className="flex justify-start">
          <Link href="https://github.com/HiroyukiYagihashi">
            <img src="/github.svg" alt="github icon" className="h-10 w-10 mx-1"/>
          </Link>
          <Link href="https://twitter.com/hryk_yg">
            <img src="/twitter.svg" alt="github icon" className="h-10 w-10 mx-1"/>
          </Link>
          <Link href="https://www.youtube.com/channel/UCwe1ysIvuHzNHbiUqsa18OQ">
            <img src="/youtube.svg" alt="github icon" className="h-10 w-10 mx-1"/>
          </Link>
        </div>
      </div>
    </header>
  );
};
