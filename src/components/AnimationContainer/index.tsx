"use client";
import type { ReactNode } from "react";
import { Fragment } from "react";
import styles from "./style.module.scss";

export type AnimationContainerProps = {
  children: ReactNode;
};

function AnimationContainer({
  children,
}: AnimationContainerProps): JSX.Element {
  return (
    <Fragment>
      <div className={styles.wrapper}>{children}</div>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Fragment>
  );
}

export default AnimationContainer;
