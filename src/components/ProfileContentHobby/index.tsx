"use client";
import Image from "next/image";
import { useContext } from "react";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import styles from "./style.module.scss";
import useRefImages from "@/hooks/useRefImages";
import type { ProfileHobbyData, ImagesData } from "@/types/data";

export type ProfileHobbyProps = {
  data: ProfileHobbyData;
  images: ImagesData[];
};

function ProfileHobby({ data, images }: ProfileHobbyProps): JSX.Element {
  const name = useContext(ProfileUserContext);
  const { refImages, isProcessing } = useRefImages({
    content: "hobby",
    images,
  });

  const testText = "Test  \nTest  \nTest";

  const hobbyContents = useMemo(
    () =>
      Object.keys(refImages)
        .sort()
        .map((k, i) => {
          const image = refImages[k];
          return (
            <div className={styles.hobbyCard} key={image.title}>
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
          );
        }) || [],
    [data.descriptions, refImages]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h1>My hobbies...</h1>
        </div>
        <div className={styles.contents}>{hobbyContents}</div>
      </div>
    </div>
  );
}

export default ProfileHobby;
