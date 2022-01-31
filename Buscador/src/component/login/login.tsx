import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./style-login.css"


export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <><div className="cabecera-login"><h2 className="title">Bienvenidos al buscador</h2></div>
    <form className="login-form" onSubmit={handleNavigation}>

          <div className="box-form">
              <h3 className="title-h3">Introduce el login</h3>
              <div className="username">
              
                  <label>Username </label>
                  <input
                      placeholder="introduce tu usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="password">
                  <label>Password </label>
                  <input 
                      placeholder="introduce tu contraseña"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} />
              </div>
          

          <div className="botton-login">
          <Stack spacing={2} direction="row">
      
      <Button  size="medium" variant="contained" type="submit">Login</Button>
      
            </Stack>
       </div>
       </div>   
      </form></>

  );
};