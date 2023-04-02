export type Empty = "";

export type SiteContents = "profile";

export type SatoOrAzu = "satoshi" | "azusa";

export type ProfileTitleData = {
  nameKanji: string;
  nameAlphabet: string;
};

export type ProfileAboutMeData = {
  aboutme: string;
};

export type ProfileHobbyData = {
  descriptions: string[];
};

export type ProfileTimelineData = {
  guide: string;
};

export type ProfileMessageData = {
  guide: message;
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
