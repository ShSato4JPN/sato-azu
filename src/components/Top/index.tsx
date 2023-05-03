"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import useSWR from "swr";
import AnimationContainer from "../AnimationContainer";
import HambergerMenu from "../HambergerMenu";
import MotionContainer from "../MotionContainer";
import styles from "./style.module.scss";
import type { GetContentsData } from "@/api/contents/[type]/[slug]/route";
import { endpointTop } from "@/libs/endpoinsts";
import type { ImagesData } from "@/types/data";

const MessageComponent = (): JSX.Element => {
  return (
    <div className={styles.topTitle}>
      <Link className={styles.azusa} href="/profile/azusa">
        <div>azusa</div>
      </Link>
      <div> x </div>
      <Link className={styles.satoshi} href="/profile/satoshi">
        <div>satoshi</div>
      </Link>
    </div>
  );
};

function Top(): JSX.Element {
  const { data } = useSWR<GetContentsData>(endpointTop);
  const images = useMemo<ImagesData[]>(
    () =>
      data?.items
        .at(0)
        ?.fields.images?.map((item) => ({
          title: item.fields.title,
          url: `https:${item.fields.file.url}`,
          fileName: item.fields.file.fileName,
          description: item.fields.description,
          size: {
            width: item.fields.file.details.image?.width || 0,
            height: item.fields.file.details.image?.height || 0,
          },
        }))
        .flat() || [],
    [data]
  );

  return (
    <MotionContainer>
      <AnimationContainer>
        <header>
          <HambergerMenu />
        </header>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.topImage}>
              <Image
                className={styles.image}
                src={images.at(0)?.url || ""}
                width={800}
                height={800}
                alt={images.at(0)?.description || "description"}
              />
            </div>
            {MessageComponent()}
          </div>
        </div>
      </AnimationContainer>
    </MotionContainer>
  );
}

export default Top;
