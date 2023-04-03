"use client";

import styles from "./style.module.scss";
import "react-vertical-timeline-component/style.min.css";

export type TimelineContentProps = {
  data: { title: string; description: string };
};

function TimelineContent({
  data: { title, description },
}: TimelineContentProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.heading}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default TimelineContent;
