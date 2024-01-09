import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              laudantium assumenda. Natus eligendi ex non? Atque quas, non
              mollitia iste sequi ullam nobis odit voluptatem aliquid dolorum
              debitis fugit dolores.
            </p>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              laudantium assumenda. Natus eligendi ex non? Atque quas, non
              mollitia iste sequi ullam nobis odit voluptatem aliquid dolorum
              debitis fugit dolores.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              laudantium assumenda. Natus eligendi ex non? Atque quas, non
              mollitia iste sequi ullam nobis odit voluptatem aliquid dolorum
              debitis fugit dolores.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
