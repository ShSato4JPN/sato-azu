"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { Fragment } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import useSWR from "swr";
import AnimationContainer from "../AnimationContainer";
import LoadingAnimation from "../LoadingAnimation";
import MotionContainer from "../MotionContainer";
import styles from "./style.module.scss";
import type { GetContentsData } from "@/api/contents/[type]/[slug]/route";
import { endpointStory } from "@/libs/endpoinsts";
import type { ImagesData, ShopsInfomation } from "@/types/data";

function StroyTop(): JSX.Element {
  const { data } = useSWR<GetContentsData>(endpointStory);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 画面のチラツキをなくすためローディング画面を表示させる。
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

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

  const shops = useMemo<JSX.Element[]>(() => {
    const shopsInfo: ShopsInfomation = {
      jj: {
        name: "平和小路酒場JJ",
        map: "https://www.google.com/maps/embed/v1/place?q=%E5%B9%B3%E5%92%8C%E5%B0%8F%E8%B7%AF%E9%85%92%E5%A0%B4%EF%BC%AA%EF%BC%AA&key=AIzaSyALtqJNpW2ZOiGikpdn_m_MLP6JotXBJNY",
      },
      "new-eight": {
        name: "ニューエイト",
        map: "https://www.google.com/maps/embed/v1/place?q=%E8%92%B2%E7%94%B0%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A8%E3%82%A4%E3%83%88&key=AIzaSyALtqJNpW2ZOiGikpdn_m_MLP6JotXBJNY",
      },
      menderu: {
        name: "麺でる",
        map: "https://www.google.com/maps/embed/v1/place?q=%E3%83%A1%E3%83%B3%E3%83%87%E3%83%AB%E3%80%80%E6%88%B8%E8%B6%8A%E5%85%AC%E5%9C%92&key=AIzaSyALtqJNpW2ZOiGikpdn_m_MLP6JotXBJNY",
      },
    };

    return images.map((d) => {
      const shopName = shopsInfo[d.title].name;
      const shopMap = shopsInfo[d.title].map;
      return (
        <div className={styles.shopContent} key={shopName}>
          <h1 className={styles.shopName}>{shopName}</h1>
          <div className={styles.shopDetails}>
            <div className={styles.imageContent}>
              <div className={styles.shopImage}>
                <Image
                  className={styles.image}
                  src={d.url}
                  width={800}
                  height={800}
                  alt={shopName}
                />
              </div>
            </div>
            <div className={styles.shopDescription}>
              <div className={styles.description}>
                <ReactMarkdown>{d.description}</ReactMarkdown>
              </div>
              <div className={styles.googleMap}>
                <iframe width="100%" height="100%" src={shopMap}></iframe>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [images]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <MotionContainer>
          <AnimationContainer>
            <main className={styles.mainContainer}>
              <div className={styles.wrapper}>
                <div className={styles.inner}>{shops}</div>
              </div>
            </main>
          </AnimationContainer>
        </MotionContainer>
      )}
    </>
  );
}

export default StroyTop;
