import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { NAV_INDEX } from "../constants/navIndex";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}
      >
        <Link to="/">
        <span>Ming Blog</span>
        </Link>
      </div>

      <div className={styles.item}>
      {NAV_INDEX.map((item) => (
      <Link key={item.content} to={item.path} className={styles.icon}>
          {item.content}
        </Link>
      ))}
      </div>
    </div>
  )
}


export default Header;