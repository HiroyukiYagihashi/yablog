import * as React from "react";
import {FC} from "react";
import Link from "next/link";

type Props = {};

export const Header: FC<Props> = (props) => {
  return (
    <header className="z-10 border-gray-200 bg-white top-0">
      <div className="flex justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="https://blog.hiroy.uk">
          <a className="text-2xl font-bold">hiroyuki blog</a>
        </Link>
      </div>
    </header>
  );
};
