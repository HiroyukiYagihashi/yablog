import * as React from "react";
import {FC} from "react";
import Link from "next/link";

type Props = {
  categories: Category[]
};

type Category = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}

export const Categories: FC<Props> = (props) => {
  return (
    <section className="flex my-5">
      {props.categories.map(category => {
        return (
          <Link href={`/categories/${category}`} key={category.name}>
            <div className="bg-blue-200	rounded-full text-blue-900 mx-1.5 px-1.5 cursor-pointer">
              {category.name}
            </div>
          </Link>
        )
      })}
    </section>
  );
};
