// pages/index.js
import Link from 'next/link';
import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import {Categories} from "../components/Categories";
import Head from "../components/Head";

export default function Home({ blog, categories }) {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Head
        title="hiroyuki blog"
        description="Hiroyuki Yagihashiのブログ"
        keyword="test"
        image=""
        url=""
      />
      <Header />
      <Profile />
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
      <Categories categories={categories}/>
      <Footer />
    </div>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://hiroyuki-yagihashi.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  const categories = await fetch('https://hiroyuki-yagihashi.microcms.io/api/v1/categories', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
      categories: categories.contents,
    },
  };
};
