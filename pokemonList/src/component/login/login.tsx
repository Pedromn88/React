import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";



import './styles.login.css'


export const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const users = [
            {
              id: 0,
              username: "admin",
              password: "test",
            },
            {
              id: 1,
              username: "ash",
              password: "1234",
            },
            {
              id: 2,
              username: "pedro",
              password: "1234",
            },    
          ];

          const validation = (username, password) => {
            const user = users.find((user) => username === user.username); 
            if (typeof user !== "undefined" && user.password === password) {           
              navigate("/list");
            } else {
              
              alert("No es tu pokedex psst...admin/test...");
              
            }
          };
      
          validation(username, password);
      
        };

return (
    

 <div className="centrar">         
<div className="login"> 
<div>
    <img className="trainer"src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/c/c0/latest/20210725170725/Entrenador_Pok%C3%A9mon_RojoFuego_y_VerdeHoja.png/1200px-Entrenador_Pok%C3%A9mon_RojoFuego_y_VerdeHoja.png"></img>
</div>

<div className="form">
<form className="login-form" onSubmit={handleNavigation}>

          <div className="box-form">
            <div className="logo-login">
               <img className="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"></img>
               </div>
              <div className="username">
              
                  <label>Entrenador Pokemon </label>
                  <input
                      placeholder="introduce tu usuario"
                      value={username}
                    onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div className="password">
                  <label>Clave Pokedex </label>
                  <input 
                     type="password" placeholder="Password" value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
              </div>
          

          <div className="botton-login">
          <Stack spacing={2} direction="row">
      
      <Button  className="button" size="medium" variant="contained" type="submit">Login</Button>
      
            </Stack>
       </div>
       </div>   
      </form>
      </div>

</div> 
</div>  

)





}



