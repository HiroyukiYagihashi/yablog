// pages/index.js
import Link from 'next/link';
import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";

export default function Home({ blog }) {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Header />
      <Profile />
      <ul>
        {blog.map(blog => (
          <Link href={`blog/${blog.id}`}>
            <li key={blog.id} className="blog-list hover:bg-gray-100">
              <a className="blog-list-title">{blog.title}</a>
              <p className="blog-list-published-at">{blog.publishedAt}</p>
            </li>
          </Link>
        ))}
      </ul>
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
  return {
    props: {
      blog: data.contents,
    },
  };
};
