import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createAt.substring(0, 10)}-{" "}
          </span>
          <span className={styles.category}>Occult</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Nunc sagittis ut quam in feugiat. Phasellus sollicitudin diam tellus,
          id placerat tellus rutrum in. Nulla facilisi. Maecenas id lacinia
          diam, vitae pretium ipsum. Duis eget magna at felis auctor facilisis.
          Mauris odio lorem, euismod quis ipsum sit amet, suscipit consequat
          nisl. Mauris vel tincidunt lorem.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
