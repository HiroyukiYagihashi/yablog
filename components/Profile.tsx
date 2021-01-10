import * as React from "react";
import {FC} from "react";
import Link from "next/link";

type Props = {};

export const Profile: FC<Props> = (props) => {
  return (
    <section className="p-5">
      <Link href="https://hiroy.uk">
        <a className="font-bold text-blue-500 hover:underline">Hiroyuki Yagihashi</a>
      </Link>
      <p>開発が好きです</p>
    </section>
  );
};
