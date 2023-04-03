"use client";
import { FaBuilding } from "@react-icons/all-files/fa/FaBuilding";
import { FaSchool } from "@react-icons/all-files/fa/FaSchool";
import { IoMdSchool } from "@react-icons/all-files/io/IoMdSchool";
import { useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styles from "./style.module.scss";
import "react-vertical-timeline-component/style.min.css";
import TimelineContent from "@/components/TimelineContent";
import type { ProfileTimelineData } from "@/types/data";
import type { Affiliation } from "@/types/data";

export type ProfileTimelineProps = {
  data: ProfileTimelineData;
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

const getCocontentStyle = (type: Affiliation): React.CSSProperties => {
  switch (type) {
    case "school":
      return { background: "skyblue", color: "#fff" };
    case "university":
      return { background: "orange", color: "#fff" };
    case "company":
      return { background: "tomato", color: "#fff" };
  }
};

const getContentArrowStyle = (type: Affiliation): React.CSSProperties => {
  switch (type) {
    case "school":
      return { borderRight: "7px solid  rgb(33, 150, 243)" };
    case "university":
      return { borderRight: "7px solid  rgb(33, 150, 243)" };
    case "company":
      return { borderRight: "7px solid  rgb(33, 150, 243)" };
  }
};

const getIconStyle = (type: Affiliation): React.CSSProperties => {
  switch (type) {
    case "school":
      return { background: "skyblue", color: "#fff" };
    case "university":
      return { background: "orange", color: "#fff" };
    case "company":
      return { background: "tomato", color: "#fff" };
  }
};

function ProfileContentTimeline({ data }: ProfileTimelineProps): JSX.Element {
  const timelineElements = useMemo(
    () =>
      data.timeline.map((d) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={getCocontentStyle(d.type)}
            contentArrowStyle={getContentArrowStyle(d.type)}
            date={`${d.start} - ${d.end}`}
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
    [data.timeline]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h1>Timeline</h1>
        </div>
        <VerticalTimeline lineColor="blue">{timelineElements}</VerticalTimeline>
      </div>
    </div>
  );
}

export default ProfileContentTimeline;
