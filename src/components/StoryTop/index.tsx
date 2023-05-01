"use client";
import { FaChurch } from "@react-icons/all-files/fa/FaChurch";
import { ImMan } from "@react-icons/all-files/im/ImMan";
import { ImManWoman } from "@react-icons/all-files/im/ImManWoman";
import { ImWoman } from "@react-icons/all-files/im/ImWoman";
import { useMemo, useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import useSWR from "swr";
import AnimationContainer from "../AnimationContainer";
import HambergerMenu from "../HambergerMenu";
import LoadingAnimation from "../LoadingAnimation";
import MotionContainer from "../MotionContainer";
import TimelineContent from "../TimelineContent";
import styles from "./style.module.scss";
import "react-vertical-timeline-component/style.min.css";
import type { GetContentsData } from "@/api/contents/[type]/route";
import { endpointStory } from "@/libs/endpoinsts";
import type { StoryType } from "@/types/data";
import type { StoryData } from "@/types/data";

const getIcon = (type: StoryType): JSX.Element => {
  switch (type) {
    case "azu":
      return <ImWoman />;
    case "sato":
      return <ImMan />;
    case "satoazu":
      return <ImManWoman />;
    case "marry":
      return <FaChurch />;
  }
};

const getCocontentStyle = (type: StoryType): React.CSSProperties => {
  switch (type) {
    case "azu":
      return { background: "#87eb99", color: "#fff", borderRadius: "10px" };
    case "sato":
      return {
        background: "#87ceeb",
        color: "#fff",
        borderRadius: "10px",
      };
    case "satoazu":
      return {
        background: "linear-gradient(90deg, #87ceeb, #87eb99)",
        color: "#fff",
        borderRadius: "10px",
      };
    case "marry":
      return {
        background: "#f7d668",
        color: "#fff",
        borderRadius: "10px",
      };
  }
};

const getContentArrowStyle = (type: StoryType): React.CSSProperties => {
  switch (type) {
    case "azu":
      return { borderRight: "7px solid #87eb99" };
    case "sato":
      return { borderRight: "7px solid #87ceeb" };
    case "satoazu":
      return {
        borderRight: "7px solid white",
      };
    case "marry":
      return { borderRight: "7px solid #f7c568" };
  }
};

const getIconStyle = (type: StoryType): React.CSSProperties => {
  switch (type) {
    case "azu":
      return { background: "#87eb99", color: "#fff" };
    case "sato":
      return { background: "#87ceeb", color: "#fff" };
    case "satoazu":
      return {
        background: "linear-gradient(90deg, #87ceeb, #87eb99)",
        color: "#fff",
      };
    case "marry":
      return { background: "#f7d668", color: "#fff" };
  }
};

function Story(): JSX.Element {
  const { data } = useSWR<GetContentsData>(endpointStory);
  const [isLoading, setIsLoading] = useState(true);
  const timeline = useMemo<StoryData>(
    () => data?.items.at(0)?.fields.data["timeline"],
    [data?.items]
  );

  useEffect(() => {
    // 画面のチラツキをなくすためローディング画面を表示させる。
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  const timelineElements = useMemo(
    () =>
      timeline.map((d) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName={styles.VerticalTimelineDate}
            contentStyle={getCocontentStyle(d.type)}
            contentArrowStyle={getContentArrowStyle(d.type)}
            iconStyle={getIconStyle(d.type)}
            icon={getIcon(d.type)}
            key={d.title}
          >
            <TimelineContent
              data={{ title: d.title, description: d.description }}
            />
          </VerticalTimelineElement>
        );
      }),
    [timeline]
  );

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <MotionContainer>
          <AnimationContainer>
            <header className={styles.header}>
              <HambergerMenu />
            </header>
            <main className={styles.mainContainer}>
              <div className={styles.screenBlockContainer}>
                <div className={styles.wrapper}>
                  <div className={styles.inner}>
                    <section className={styles.timelineSection}>
                      <VerticalTimeline lineColor="linear-gradient(90deg, #87ceeb, #87eb99)">
                        {timelineElements}
                      </VerticalTimeline>
                    </section>
                  </div>
                </div>
              </div>
            </main>
          </AnimationContainer>
        </MotionContainer>
      )}
    </>
  );
}

export default Story;
