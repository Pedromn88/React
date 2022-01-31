import React from "react"
import { HeaderLayout } from "../../layouts/header";
import { RickSearch } from "../context";
import { RickList } from "../list/RickList"

export const ListRick = () => {
    
    return (  

        <>
        <HeaderLayout />
        <RickSearch />
        <RickList />
        </>             
    
    );
  }