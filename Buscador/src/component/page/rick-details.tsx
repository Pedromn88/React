import React from "react";
import { HeaderLayout } from "../../layouts/header";

import { ShowRickDetails } from "../detail/detailRick";



export const RickDetails: React.FC = () => {
  return (
    <>
        <HeaderLayout />
      <ShowRickDetails />
    </>
  );
};