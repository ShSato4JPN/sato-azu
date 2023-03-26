export type Empty = "";

export type SatoOrAzuData = "satoshi" | "azusa";

export type ProfileTitleData = {
  nameKanji: string;
  nameAlphabet: string;
};

export type ProfileAboutMeData = {
  aboutme: string;
};

export type ProfileHobbyData = {
  hobby: string;
};

export type ProfileGuideData = {
  guide: string;
};

export type ProfileData = {
  name: string;
  alphabet: string;
  profileTitle: ProfileTitleData;
  profileAboutme: ProfileAboutMeData;
  profileHobby: ProfileHobbyData;
  profileGuide: ProfileGuideData;
};

export type ImagesData = {
  url: string;
  fileName: string;
  size: {
    width: number;
    height: number;
  };
};
