"use client";
import Image from "next/image";
import { useContext } from "react";
import { Oval } from "react-loader-spinner";
import { ProfileUserContext } from "../Providers/ProfileUserProvider";
import styles from "./style.module.scss";
import useRefImages from "@/hooks/useRefImages";
import type { ProfileAboutMeData } from "@/types/data.d";
import type { ImagesData } from "@/types/data.d";

export type ProfileAboutMeProps = {
  data: ProfileAboutMeData;
  images: ImagesData[];
};

function ProfileContentAboutMe({
  data,
  images,
}: ProfileAboutMeProps): JSX.Element {
  const name = useContext(ProfileUserContext);
  const { refImages, isProcessing } = useRefImages({
    content: "aboutme",
    images,
  });

  const ovalColor = name === "azusa" ? "#0db678" : "#0d51b6";

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h1>About me</h1>
        </div>
        <div className={styles.contents}>
          <div className={styles.contentImage}>
            {isProcessing ? (
              <Oval
                color={ovalColor}
                secondaryColor="#C0C0C0"
                strokeWidth={2}
                strokeWidthSecondary={2}
                visible={true}
                height={5}
                width={5}
              />
            ) : (
              <Image
                className={styles.profileImage}
                src={refImages["aboutme-profile-image"].url}
                width={800}
                height={800}
                alt={refImages["aboutme-profile-image"].description}
              />
            )}
          </div>
          <div className={styles.contetntDescription}>
            <h2>
              tExperienced Chief Technology Officer, Developer & Teacher with a
              <br />
              demonstrated history of working in the internet industry. Skilled
              in
              <br />
              PHP (Symfony & Laravel frameworks), TDD, continuous integration,
              <br />
              WordPress, Linux System Administration, and Application
              Programming
              <br />
              Interfaces. Strong engineering professional with a Licence focused
              <br />
              in Web Development from Université Claude Bernard Lyon 1. My
              <br />
              favourite stack : Laravel 5, Symfony Flex, PHPUnit, PHPQA,
              <br />
              Micro-services, Docker, ReactJS, ReactNative with continuous
              <br />
              integration on Gitlab.
              <br />
              tExperienced Chief Technology Officer, Developer & Teacher with a
              <br />
              demonstrated history of working in the internet industry. Skilled
              in
              <br />
              PHP (Symfony & Laravel frameworks), TDD, continuous integration,
              <br />
              WordPress, Linux System Administration, and Application
              Programming
              <br />
              Interfaces. Strong engineering professional with a Licence focused
              <br />
              in Web Development from Université Claude Bernard Lyon 1. My
              <br />
              favourite stack : Laravel 5, Symfony Flex, PHPUnit, PHPQA,
              <br />
              Micro-services, Docker, ReactJS, ReactNative with continuous
              <br />
              integration on Gitlab.
              <br />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContentAboutMe;
