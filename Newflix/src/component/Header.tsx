import React from "react"
import { css } from "@emotion/react"
import "./styles.component.css"
import { Link } from "react-router-dom"

export const HeaderNewflix = () => {
    return (
<div>
    <Link to="/"><img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png" css={css` height:auto; width: 25%; display:flex; margin: 0 auto`} className="header"></img>
</Link>
  </div>

        )}
 

