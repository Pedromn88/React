import React from "react";
import { HeaderLayout } from "../../layouts/header";
import { ShowMembersDetails } from "../detail/detail-members";



export const DetailPage: React.FC = () => {
  return (
    <>
        <HeaderLayout />
      <ShowMembersDetails />
    </>
  );
};