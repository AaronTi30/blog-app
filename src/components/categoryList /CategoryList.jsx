import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.spirituality}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          spirituality
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.philosophy}`}
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          philosophy
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.literature}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          literature
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.occult}`}
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          occult
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.metaphysics}`}
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          metaphysics
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.logic}`}
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          logic & ethics
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
