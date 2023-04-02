"use client";
import type { ReactNode } from "react";
import React from "react";
import type { SatoOrAzu } from "@/types/data";

export type ProfileUserData = SatoOrAzu;

export const ProfileUserContext = React.createContext<ProfileUserData | null>(
  null
);

export type ProfileUserProviderProps = {
  children: ReactNode;
  value: ProfileUserData;
};

function ProfileUserProvider({
  children,
  value,
}: ProfileUserProviderProps): JSX.Element {
  return (
    <ProfileUserContext.Provider value={value}>
      {children}
    </ProfileUserContext.Provider>
  );
}

export default ProfileUserProvider;
