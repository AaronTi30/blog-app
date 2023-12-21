import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.literature}`}>
            Literature
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.metaphysics}`}>
            Metaphysics
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Robert Covington</span>
            <span className={styles.date}> - 10.16.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.logic}`}>
            Logic & Ethics
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Dirk Schouten</span>
            <span className={styles.date}> - 11.05.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.spirituality}`}>
            Spirtuality
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ada Lovelace</span>
            <span className={styles.date}> - 12.23.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.occult}`}>Occult</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ashley Graham</span>
            <span className={styles.date}> - 12.21.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
