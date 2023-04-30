"use client";
import Image from "next/image";
import { useMemo, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import ScrollAnimation from "../ScrollAnimation";
import styles from "./style.module.scss";
import type { StylesTemplate } from "@/hooks/useDynamicStyles";
import useDynamicStyles from "@/hooks/useDynamicStyles";
import useRefImages from "@/hooks/useRefImages";
import type { ProfileHobbyData, ImagesData, SatoOrAzu } from "@/types/data";

export type ProfileHobbyProps = {
  data: ProfileHobbyData;
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

function ProfileHobby({ data, images }: ProfileHobbyProps): JSX.Element {
  const name = useContext(ProfileUserContext);
  const { refStyles } = useDynamicStyles<StylesFormat>(
    name as SatoOrAzu,
    stylesTemplate
  );
  const { refImages } = useRefImages({
    content: "hobby",
    images,
  });

  console.dir(refImages);

  const hobbyContents = useMemo<JSX.Element[]>(
    () =>
      Object.keys(refImages)
        .sort()
        .map((k, i) => {
          const image = refImages[k];
          return (
            <ScrollAnimation
              height={{ height: "550px" }}
              direction={i % 2 === 0 ? "right" : "left"}
              rootMargin={"-80px"}
              triggerOnce={true}
              key={image.title}
            >
              <div className={styles.hobbyCard}>
                <div className={styles.hobbyCardImage}>
                  <Image
                    className={styles.image}
                    src={image.url}
                    width={800}
                    height={800}
                    alt={image.description}
                  />
                </div>
                <div className={styles.hobbyCardTitle}>
                  <h1>{data.descriptions[i]}</h1>
                </div>
                <div className={styles.hobbyCardDescription}>
                  <ReactMarkdown>{image.description}</ReactMarkdown>
                </div>
              </div>
            </ScrollAnimation>
          );
        }) || [],
    [data.descriptions, refImages]
  );

  return (
    <div className={refStyles.wrapper}>
      <div className={styles.inner}>
        <section className={styles.hobbiesSection}>
          <h1 className={styles.sectionTitle}>Hobbies</h1>
          <div className={styles.contents}>{hobbyContents}</div>
        </section>
      </div>
    </div>
  );
}

export default ProfileHobby;
