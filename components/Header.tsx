import * as React from "react";
import {FC} from "react";

type Props = {};

export const Header: FC<Props> = (props) => {
  return (
    <header className="z-10 border-b border-gray-200 bg-white top-0">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>テストロゴ</div>
      </div>
    </header>
  );
};
