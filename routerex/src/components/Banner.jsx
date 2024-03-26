import styles from "./banner.module.css";

const Banner = () => {
  return <div
  className={styles.container}
  >
    <span className={styles.header}>
    ❤️김민정의 일상 블로그
    </span>
    <span className={styles.preface}>
      Anyone can be Anything!
    </span>
  </div>;
};

export default Banner;
