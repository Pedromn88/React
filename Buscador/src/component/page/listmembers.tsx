import React from "react";
import { HeaderLayout } from "../../layouts/header";
import { MemberSearch } from "../context/context-member";
import { ShowMembersList } from "../list/ListMembers";



export const ListPage: React.FC = () => {
  return (
    <>
        <HeaderLayout />
      <MemberSearch />
      <ShowMembersList />   
      </>
  );
};