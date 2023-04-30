"use client";
import Image from "next/image";
import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { Oval } from "react-loader-spinner";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import ScrollAnimation from "../ScrollAnimation";
import styles from "./style.module.scss";
import useDynamicStyles from "@/hooks/useDynamicStyles";
import type { StylesTemplate } from "@/hooks/useDynamicStyles";
import useRefImages from "@/hooks/useRefImages";
import type { ProfileAboutMeData } from "@/types/data.d";
import type { ImagesData, SatoOrAzu } from "@/types/data.d";

import "animate.css";

export type ProfileAboutMeProps = {
  data: ProfileAboutMeData;
  images: ImagesData[];
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

function ProfileContentAboutMe({
  data,
  images,
}: ProfileAboutMeProps): JSX.Element {
  const name = useContext(ProfileUserContext);
  const { refStyles } = useDynamicStyles<StylesFormat>(
    name as SatoOrAzu,
    stylesTemplate
  );
  const { refImages, isProcessing } = useRefImages({
    content: "aboutme",
    images,
  });

  const ovalColor = name === "azusa" ? "#0db678" : "#0d51b6";

  return (
    <div className={refStyles.wrapper}>
      <div className={styles.inner}>
        <section className={styles.imageSection}>
          {isProcessing ? (
            <Oval
              color={ovalColor}
              secondaryColor="#C0C0C0"
              strokeWidth={2}
              strokeWidthSecondary={2}
              visible={true}
              height={5}
              width={5}
            />
          ) : (
            <Image
              className={styles.profileImage}
              src={refImages[`aboutme-${name}-image`].url}
              width={800}
              height={800}
              alt={refImages[`aboutme-${name}-image`].description}
            />
          )}
        </section>
        <section className={styles.detailSection}>
          <h1 className={styles.sectionTitle}>Details</h1>
          <ScrollAnimation
            height={isMobile ? { height: "650px" } : { height: "550px" }}
            direction="right"
            rootMargin="-100px"
            triggerOnce={true}
          >
            <div className={styles.detail}>
              <div className={styles.detailContent}>
                <div className={styles.detailName}>Name</div>
                <div className={styles.detailValue}>
                  <ruby>
                    {data.nameKanji}
                    <rt>{data.nameHiragana}</rt>
                  </ruby>
                </div>
              </div>
              <div className={styles.detailContent}>
                <div className={styles.detailName}>Birthday</div>
                <div className={styles.detailValue}>{data.birthday}</div>
              </div>
              <div className={styles.detailContent}>
                <div className={styles.detailName}>Job</div>
                <div className={styles.detailValue}>{data.job}</div>
              </div>
              <div className={styles.detailContent}>
                <div className={styles.detailName}>Work</div>
                <div className={styles.detailValue}>{data.work}</div>
              </div>
              <div className={styles.detailContent}>
                <h1 className={styles.detailName}>About</h1>
                <div className={styles.detailValue}>{data.aboutme}</div>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
}

export default ProfileContentAboutMe;
