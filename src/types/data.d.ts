export type Empty = "";

export type SiteContents = "profile";

export type SatoOrAzu = "satoshi" | "azusa";

export type ProfileTitleData = {
  nameKanji: string;
  nameAlphabet: string;
};

export type ProfileAboutMeData = {
  nameKanji: string;
  nameAlphabet: string;
  nameHiragana: string;
  blood: string;
  birthday: string;
  job: string;
  work: string;
  aboutme: string;
};

export type ProfileHobbyData = {
  descriptions: string[];
};

export type Affiliation = "school" | "university" | "company";

export type TimelineData = {
  title: string;
  start: string;
  end: string;
  type: Affiliation;
  description: string;
};

export type ProfileTimelineData = {
  timeline: TimelineData[];
};

export type ProfileMessageData = {
  message: string;
};

export type ProfileData = {
  name: string;
  alphabet: string;
  profileTitle: ProfileTitleData;
  profileAboutme: ProfileAboutMeData;
  profileHobby: ProfileHobbyData;
  profileTimeline: ProfileTimelineData;
  profileMessage: ProfileMessage;
};

export type ImagesData = {
  title: string;
  url: string;
  fileName: string;
  description: string;
  size: {
    width: number;
    height: number;
  };
};
