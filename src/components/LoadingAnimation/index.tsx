import PacmanLoader from "react-spinners/PacmanLoader";
import styles from "./style.module.scss";

function LoadingAnimation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <PacmanLoader color="#FFF200" />
      </div>
    </div>
  );
}

export default LoadingAnimation;
