import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
