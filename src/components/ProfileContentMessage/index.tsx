"use client";
import { useContext } from "react";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import styles from "./style.module.scss";
import type { ProfileMessageData } from "@/types/data";

export type ProfileMessageProps = {
  data: ProfileMessageData;
};

function ProfileContentMessage({ data }: ProfileMessageProps): JSX.Element {
  const name = useContext(ProfileUserContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h1>Message</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfileContentMessage;
