import React from "react";
import { generatePath, Link } from "react-router-dom";
import { MemberSearch } from "../component/context/context-member";
import "./style-layout.css"



export const HeaderLayout: React.FC = () => {
  return (
    <>
      <header className="header">
        <div>
        <Link
                to={generatePath(`/list`)}>
          <h1> Listado de Empresas</h1>
          </Link>
        </div>
        <div >
        <Link
                to={generatePath(`/rick-morty-list`)}>
          <img className="header-logo" src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"></img>
          </Link>
        </div>
      </header>
    </>
  );
};