import { useParams } from "react-router-dom";
import { SIDE_CONTENT } from "../../constants/sideIndex";
import styles from "./writing.module.css";

const Writing = () => {
  const {id, menu}  = useParams(); 

  return (
    <div>
      {menu && 
      <div className={styles.container}>
        <span className={styles.title}>

        {SIDE_CONTENT[menu].title}
        </span>
        <span className={styles.preface}>

        {SIDE_CONTENT[menu].content}
        </span>
        </div>
      }
    </div>
  )
}

export default Writing;