import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.png" alt="profile" width={300} height={200} />
      <h1 className={styles["title-homepage"]}>Hello World</h1>
    </Layout>
  );
};

export default Home;
