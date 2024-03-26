import { Outlet, useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";
import styles from "./content.module.css";

const Content = () => {
  const params = useParams();
  console.log(params.id);
  return (
  <div className={styles.container}>
    <div className={styles.sideWrapper}>
        <SideBar id={params.id}/>
    </div>
    <Outlet/>
  </div>
  )
}

export default Content;