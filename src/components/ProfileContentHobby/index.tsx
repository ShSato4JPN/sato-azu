"use client";
import Image from "next/image";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import ScrollAnimation from "../ScrollAnimation";
import styles from "./style.module.scss";
import useRefImages from "@/hooks/useRefImages";
import type { ProfileHobbyData, ImagesData } from "@/types/data";

export type ProfileHobbyProps = {
  data: ProfileHobbyData;
  images: ImagesData[];
};

function ProfileHobby({ data, images }: ProfileHobbyProps): JSX.Element {
  //const name = useContext(ProfileUserContext);
  const { refImages } = useRefImages({
    content: "hobby",
    images,
  });

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
    <div className={styles.wrapper}>
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
