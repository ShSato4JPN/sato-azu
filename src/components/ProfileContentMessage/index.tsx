"use client";
import { useContext } from "react";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import ScrollAnimation from "../ScrollAnimation";
import styles from "./style.module.scss";
import type { StylesTemplate } from "@/hooks/useDynamicStyles";
import useDynamicStyles from "@/hooks/useDynamicStyles";
import type { ProfileMessageData, SatoOrAzu } from "@/types/data";

export type ProfileMessageProps = {
  data: ProfileMessageData;
};

type StylesFormat = {
  wrapper: string;
};

const stylesTemplate: StylesTemplate = {
  wrapper: [
    styles.wrapper,
    [
      styles["wrapper-background-color-azusa"],
      styles["wrapper-background-color-satoshi"],
    ],
  ],
};

function ProfileContentMessage({ data }: ProfileMessageProps): JSX.Element {
  const name = useContext(ProfileUserContext);

  const { refStyles } = useDynamicStyles<StylesFormat>(
    name as SatoOrAzu,
    stylesTemplate
  );
  return (
    <div className={refStyles.wrapper}>
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
