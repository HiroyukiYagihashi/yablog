import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import * as React from "react";
import {Categories} from "../../components/Categories";

export default function BlogId({ blog }) {
  return (
    <main className="container mx-auto max-w-screen-lg">
      <Header />
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="blog-list-published-at mb-5">{blog.publishedAt}</p>
      {blog.categories.length !== 0 && <Categories categories={blog.categories} />}
      <article className="markdown"
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <Footer />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://hiroyuki-yagihashi.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/blog/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(
    'https://hiroyuki-yagihashi.microcms.io/api/v1/blog/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};
