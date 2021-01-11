import * as React from "react";
import {FC} from "react";
import Link from "next/link";

type Props = {};

export const Profile: FC<Props> = (props) => {
  return (
    <section className="py-5 flex">
      <img src="/icon.svg" className="w-10 h-10 rounded-full mr-3 mt-1.5"/>
      <div>
        <Link href="https://hiroy.uk">
          <a className="font-bold text-blue-500 hover:underline">Hiroyuki Yagihashi</a>
        </Link>
        <p>TypeScriptとRustが好きなエンジニアです。</p>
      </div>
    </section>
  );
};
