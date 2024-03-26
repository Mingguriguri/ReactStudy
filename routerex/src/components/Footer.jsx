import styles from "./footer.module.css";
import { FOOTER_INDEX } from "../constants/footerIndex";

const Footer = () => {
  return (
  <div className={styles.container}>
    {Object.entries(FOOTER_INDEX).map(([key, value]) => (
      <div>
        <span className={styles.title}>
          {key}
        </span>
        <div className={styles.list}>
          {value.map((item) => <a className={styles.tag}
          href={item.path}>{item.content}</a>)}
        </div>
      </div>
    ))}
  </div>
  )
}

export default Footer;