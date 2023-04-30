"use client";
import { FaBuilding } from "@react-icons/all-files/fa/FaBuilding";
import { FaSchool } from "@react-icons/all-files/fa/FaSchool";
import { IoMdSchool } from "@react-icons/all-files/io/IoMdSchool";
import { useMemo, useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import styles from "./style.module.scss";
import "react-vertical-timeline-component/style.min.css";
import TimelineContent from "@/components/TimelineContent";
import type { StylesTemplate } from "@/hooks/useDynamicStyles";
import useDynamicStyles from "@/hooks/useDynamicStyles";
import type { ProfileTimelineData } from "@/types/data";
import type { Affiliation, SatoOrAzu } from "@/types/data";

export type ProfileTimelineProps = {
  data: ProfileTimelineData;
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

const getColor = (name: SatoOrAzu): string => {
  return name === "satoshi" ? "#87ceeb" : "#87eb99";
};

const getIcon = (type: Affiliation): JSX.Element => {
  switch (type) {
    case "school":
      return <FaSchool />;
    case "university":
      return <IoMdSchool />;
    case "company":
      return <FaBuilding />;
  }
};

const getCocontentStyle = (
  type: Affiliation,
  name: SatoOrAzu
): React.CSSProperties => {
  switch (type) {
    case "school":
      return {
        background: getColor(name),
        color: "#fff",
        borderRadius: "10px",
      };
    case "university":
      return {
        background: "#f7d668",
        color: "#fff",
        borderRadius: "10px",
      };
    case "company":
      return { background: "#f1a67e", color: "#fff", borderRadius: "10px" };
  }
};

const getContentArrowStyle = (
  type: Affiliation,
  name: SatoOrAzu
): React.CSSProperties => {
  switch (type) {
    case "school":
      return { borderRight: `7px solid ${getColor(name)}` };
    case "university":
      return { borderRight: "7px solid #f7c568" };
    case "company":
      return { borderRight: "7px solid #f78f69" };
  }
};

const getIconStyle = (
  type: Affiliation,
  name: SatoOrAzu
): React.CSSProperties => {
  switch (type) {
    case "school":
      return { background: getColor(name), color: "#fff" };
    case "university":
      return { background: "#f7d668", color: "#fff" };
    case "company":
      return { background: "#f1a67e", color: "#fff" };
  }
};

function ProfileContentTimeline({ data }: ProfileTimelineProps): JSX.Element {
  const name = useContext(ProfileUserContext);
  const { refStyles } = useDynamicStyles<StylesFormat>(
    name as SatoOrAzu,
    stylesTemplate
  );

  const timelineElements = useMemo(
    () =>
      data.timeline.map((d) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName={styles.VerticalTimelineDate}
            contentStyle={getCocontentStyle(d.type, name as SatoOrAzu)}
            contentArrowStyle={getContentArrowStyle(d.type, name as SatoOrAzu)}
            date={`${d.start} - ${d.end}`}
            iconStyle={getIconStyle(d.type, name as SatoOrAzu)}
            icon={getIcon(d.type)}
            key={d.title}
          >
            <TimelineContent
              data={{ title: d.title, description: d.description }}
            />
          </VerticalTimelineElement>
        );
      }),
    [data.timeline, name]
  );

  return (
    <div className={refStyles.wrapper}>
      <div className={styles.inner}>
        <section className={styles.timelineSection}>
          <h1 className={styles.sectionTitle}>Timeline</h1>
          <VerticalTimeline lineColor={getColor(name as SatoOrAzu)}>
            {timelineElements}
          </VerticalTimeline>
        </section>
      </div>
    </div>
  );
}

export default ProfileContentTimeline;
