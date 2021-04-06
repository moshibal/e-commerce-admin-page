import React from "react";
import "./login.style.css";
import { Button } from "react-bootstrap";
import LoginForm from "../../components/login-form/LoginForm";

function Login() {
  return (
    <div className="login-page bg-dark">
      <LoginForm />
    </div>
  );
}

export default Login;
