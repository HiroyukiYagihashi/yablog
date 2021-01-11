import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import * as React from "react";
import Link from "next/link";

export default function CategoryId({ blog, category }) {
  return (
    <main className="container mx-auto max-w-screen-lg">
      <Header />
      <div className="flex mb-3">
        <p className="bg-blue-200	rounded-full text-blue-900 mx-1.5 px-1.5 cursor-pointer">
          {category.name}
        </p>
      </div>
      <ul>
        {blog.map(blog => (
          <Link href={`/blog/${blog.id}`}>
            <li key={blog.id} className="blog-list hover:bg-gray-100">
              <a className="blog-list-title font-bold cursor-pointer">{blog.title}</a>
              <p className="blog-list-published-at">{blog.publishedAt}</p>
            </li>
          </Link>
        ))}
      </ul>
      <Footer />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://hiroyuki-yagihashi.microcms.io/api/v1/categories', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/category/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const category = await fetch(
    'https://hiroyuki-yagihashi.microcms.io/api/v1/categories/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  const data = await fetch(
    'https://hiroyuki-yagihashi.microcms.io/api/v1/blog?filters=categories[contains]' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  console.log(data);
  return {
    props: {
      blog: data.contents,
      category: category,
    },
  };
};
