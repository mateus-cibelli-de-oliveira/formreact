import React from "react";
import "./login.css";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  return (
    <div className="login">
        <div className="login-logo">
                <img
                src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"
                alt="Login App"
                />
        </div>

            <div class="login-right">
                <h1>Login</h1>
                        <div class="login-LoginInputEmail"> 
                                  <MdEmail />
                            <input 
                            type="text" 
                            placeholder="Digite um e-mail" 
                            />
                        </div>
                        <div class="login-LoginInputPassword"> 
                                   <MdLock />
                            <input 
                            type="text" 
                            placeholder="Digite sua senha" 
                            />
                        </div>
                            <button type="submit">
                                Entrar!
                            </button>

                            <h4>Ainda não fez sua conta?</h4>

                            <button type="submit">
                                Cadastre-se!
                            </button>

            </div>
    </div>
  );
};

export default Login;
