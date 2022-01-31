import React  from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberEntity } from "../interfaces/member.entity";
import { MyFilterContext } from "../context/context-member";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import "./style-list.css"

export const ShowMembersList: React.FC = (props) => {
  const filterContext = React.useContext(MyFilterContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [actualPage, setActualPage] = React.useState(1);
  const postPerPage = "10";

  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${filterContext.newFilter}/members?page=${actualPage}&per_page=${postPerPage}`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json))     
      .catch((error) => {window.location.href = "/list/"});

      
}, [filterContext, actualPage, postPerPage]);  

  const handlePrevPage = () => {
    setActualPage(actualPage - 1);    
  };

  const handleNextPage = () => {
    setActualPage(actualPage + 1);
    if (members.length < 10) {
      setActualPage(actualPage);
    }  
  };

  return (
<div>

 
          {members.map((member) => (
                <div className="list-cuadro">
                <><div><img className="avatar" src={member.avatar_url} /></div> <Link to={generatePath("/detail/:id", { id: member.login })}>
                <p className="text-member">{member.login}</p>
              </Link>
              <span>{member.id}</span></>
              </div>

          ))}     

        
      <div className="button-page">

      <Stack direction="row" spacing={2}>
      
      <Button href="#" onClick={handlePrevPage}> Página Previa </Button>
             
       
            <Button href="#" onClick={handleNextPage}> Página siguiente </Button>
            </Stack>
          </div>
</div>
  );

}
