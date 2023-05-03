import SyncLoader from "react-spinners/SyncLoader";
import styles from "./style.module.scss";

function LoadingAnimation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <SyncLoader speedMultiplier={0.7} color="#FFF200" />
      </div>
    </div>
  );
}

export default LoadingAnimation;
