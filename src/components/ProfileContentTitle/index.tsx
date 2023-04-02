"use client";
import { useContext } from "react";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import styles from "./style.module.scss";
import type { StylesTemplate } from "@/hooks/useDynamicStyles";
import useDynamicStyles from "@/hooks/useDynamicStyles";
import type { ProfileTitleData, SatoOrAzu } from "@/types/data.d";

export type ProfileTitleProps = {
  data: ProfileTitleData;
};

type StylesFormat = {
  wrapper: string;
};

const stylesTemplate: StylesTemplate = {
  wrapper: [
    styles.wrapper,
    [styles["wrapper-color-azusa"], styles["wrapper-color-satoshi"]],
  ],
};

function ProfileContentTitle({ data }: ProfileTitleProps): JSX.Element {
  const name = useContext(ProfileUserContext);
  const { refStyles } = useDynamicStyles<StylesFormat>(
    name as SatoOrAzu,
    stylesTemplate
  );

  const { nameKanji, nameAlphabet } = data;

  return (
    <div className={refStyles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.helloMessage}>hello</div>
        <h1 className={styles.nameKanji}>{nameKanji}</h1>
        <h1 className={styles.nameAlphabet}>{nameAlphabet}</h1>
      </div>
    </div>
  );
}

export default ProfileContentTitle;
