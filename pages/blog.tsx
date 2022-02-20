import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface Blog {
  blogData: Posts[];
}

export default function Blog(props: Blog) {
  const { blogData } = props;

  return (
    <Layout pageTitle="Blog">
      {blogData.map((blog) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h4>{blog.title}</h4>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogData = await res.json();

  return {
    props: {
      blogData,
    },
  };
}
