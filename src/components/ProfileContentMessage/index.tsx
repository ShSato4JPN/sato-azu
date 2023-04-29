"use client";
import ScrollAnimation from "../ScrollAnimation";
import styles from "./style.module.scss";
import type { ProfileMessageData } from "@/types/data";

export type ProfileMessageProps = {
  data: ProfileMessageData;
};

function ProfileContentMessage({ data }: ProfileMessageProps): JSX.Element {
  //const name = useContext(ProfileUserContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.messageContent}>
          <ScrollAnimation
            height={{ height: "300px" }}
            direction={"backInDown"}
            rootMargin={"-100px"}
            triggerOnce={true}
          >
            <div className={styles.content}>{data.message}</div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default ProfileContentMessage;
