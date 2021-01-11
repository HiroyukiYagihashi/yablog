import * as React from "react";
import {FC} from "react";

type Props = {};

export const Footer: FC<Props> = (props) => {
  return (
    <footer className="border-gray-300 border-t my-10">
      <small className="text-gray-500">© Hiroyuki Yagihashi</small>
    </footer>
  );
};
