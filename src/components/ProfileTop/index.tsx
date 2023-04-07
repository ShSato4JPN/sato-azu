"use client";
import { useMemo, useState, useEffect } from "react";
import useSWR from "swr";
import AnimationContainer from "../AnimationContainer";
import LoadingAnimation from "../LoadingAnimation";
import MotionContainer from "../MotionContainer";
import ProfileContentMessage from "../ProfileContentMessage";
import ProfileContentTimeline from "../ProfileContentTimeline";
import styles from "./style.module.scss";
import type { GetContentsData } from "@/api/contents/[type]/[slug]/route";
import ProfileContentAboutMe from "@/components/ProfileContentAboutMe";
import ProfileContentHobby from "@/components/ProfileContentHobby";
import ProfileContentTitle from "@/components/ProfileContentTitle";
import ProfileUserProvider from "@/components/Providers/ProfileUserProvider";
import { endpointProfile } from "@/libs/endpoinsts";
import type { ProfileData, ImagesData, SatoOrAzu } from "@/types/data";

type ProfileTopProps = {
  name: SatoOrAzu;
};

function ProfileTop({ name }: ProfileTopProps): JSX.Element {
  const { data } = useSWR<GetContentsData>(endpointProfile);
  //const { refStyles } = useRefStyles<StylesType>(name, stylesTemplate);
  const [isLoading, setIsLoading] = useState(true);

  const profile = useMemo<ProfileData>(
    () => data?.items.at(0)?.fields.data[name],
    [data?.items, name]
  );

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

  useEffect(() => {
    // 画面のチラツキをなくすためローディング画面を表示させる。
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  return (
    <ProfileUserProvider value={name}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <MotionContainer>
          <AnimationContainer>
            <main className={styles.mainContainer}>
              <div className={styles.screenBlockContainer}>
                <ProfileContentTitle data={profile.profileTitle} />
              </div>
              <div className={styles.screenBlockContainer}>
                <ProfileContentAboutMe
                  data={profile.profileAboutme}
                  images={images}
                />
              </div>
              <div className={styles.screenBlockContainer}>
                <ProfileContentHobby
                  data={profile.profileHobby}
                  images={images}
                />
              </div>
              <div className={styles.screenBlockContainer}>
                <ProfileContentTimeline data={profile.profileTimeline} />
              </div>
              <div className={styles.screenBlockContainer}>
                <ProfileContentMessage data={profile.profileMessage} />
              </div>
            </main>
          </AnimationContainer>
        </MotionContainer>
      )}
    </ProfileUserProvider>
  );
}

export default ProfileTop;