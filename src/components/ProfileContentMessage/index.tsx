"use client";
import { useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
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
        <div className={styles.heading}>Message</div>
        <div className={styles.message}>
          <ReactMarkdown>{data.message}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ProfileContentMessage;
