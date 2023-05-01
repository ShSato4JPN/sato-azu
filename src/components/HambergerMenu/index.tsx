import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import React from "react";
import { useState, useContext } from "react";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import styles from "./style.module.scss";
import useDynamicStyles from "@/hooks/useDynamicStyles";
import type { StylesTemplate } from "@/hooks/useDynamicStyles";
import type { SatoOrAzu } from "@/types/data.d";

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

function HambergerMenu(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const name = useContext(ProfileUserContext);
  const { refStyles } = useDynamicStyles<StylesFormat>(
    name as SatoOrAzu,
    stylesTemplate
  );

  return (
    <div className={refStyles.wrapper}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <Link href="/">
              <li>TOP</li>
            </Link>
            <Link href="/lifestyle">
              <li>LIFE STYLE</li>
            </Link>
            <Link href="/story">
              <li>STORY</li>
            </Link>
            <Link href="/profile/azusa">
              <li>AZUSA</li>
            </Link>
            <Link href="/profile/satoshi">
              <li>SATOSHI</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HambergerMenu;
