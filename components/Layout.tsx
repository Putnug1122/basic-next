import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
