import { Outlet } from "react-router-dom";
import styles from "./posts.module.css";

export function Posts() {
  return (
    <div className={styles.container}>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
