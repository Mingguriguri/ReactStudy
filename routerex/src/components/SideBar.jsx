import styles from "./sideBar.module.css";
import { SIDE_INDEX } from "../constants/sideIndex";
import { Link } from "react-router-dom";

const SideBar = ({id}) => {
  console.log(SIDE_INDEX[id], id)
  return (
    <div className={styles.sidebar}>
      {id && 
        <>
          <h2>{id}</h2>
          <div className={styles.linkWrapper}>
          {SIDE_INDEX[id].map((item) => 
            <Link to={item.path} className={styles.link}>
              {item.title}
            </Link>
          )}
          </div>
        </>
      }
    </div>
  );
}

export default SideBar;