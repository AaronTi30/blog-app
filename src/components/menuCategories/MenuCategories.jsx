import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.literature}`}
      >
        Literature
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.occult}`}>
        Occult
      </Link>
      <Link
        href="/blog>cat=style"
        className={`${styles.categoryItem} ${styles.philosophy}`}
      >
        Philosophy
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.metaphysics}`}
      >
        Metaphysics
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.logic}`}>
        Logic & Ethics
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.spirituality}`}
      >
        Spirituality
      </Link>
    </div>
  );
};

export default MenuCategories;
