import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Socratic Sessions:</b> Ignite your Enlightenment.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Nunc sagittis ut quam in feugiat. Phasellus sollicitudin diam
            tellus, id placerat tellus rutrum in. Nulla facilisi. Maecenas id
            lacinia diam, vitae pretium ipsum. Duis eget magna at felis auctor
            facilisis. Mauris odio lorem, euismod quis ipsum sit amet, suscipit
            consequat nisl. Mauris vel tincidunt lorem.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
